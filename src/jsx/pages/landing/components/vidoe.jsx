import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { m, motion } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';
import { useLocales } from 'src/locales';
import { Grid } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';
import { TextField, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import '../dotsStyle.css';

export default function LandingVideoSection() {
    const theme = useTheme();

    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        // speed : 5000,
        autoplaySpeed: 5000, // Set to 0 for continuous scrolling
        cssEase: 'linear', // Smooth transition
    };

    const [filterText, setFilterText] = useState('');
    const [chunkedData, setChunkedData] = useState([]);
    const is470px = useMediaQuery('(min-width:470px)');
    const { t } = useLocales(); // Assuming this is a localization function

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const checkSearchFunction = () => {
        const results = [];

        cardData?.filter((iter) => {
            if (iter?.title?.toLowerCase().includes(filterText?.toLowerCase())) {
                results?.push(iter);
            }
        });

        return results;
    };

    const isXs = useMediaQuery('(min-width:600px)');

    useEffect(() => {



        if (filterText?.trim() === '') {
            setChunkedData(chunkArray(cardData, isXs ? 8 : 4));
        } else {
            const results = checkSearchFunction();
            setChunkedData(chunkArray(results, 8));
        }
    }, [filterText]); // Re-run when filterText

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    // console.log('chunkedData = ', chunkedData);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100vw',
                // height: '100vh'
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100vw',
                    height: {
                        lg: '60rem',
                        md: '60rem',
                        sm: '55rem',
                        xs: '55rem',
                    },
                    overflow: 'hidden',
                    '& video': {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    },
                }}
                component={MotionViewport}
            >
                <video autoPlay loop muted playsInline id="vid">
                    <source lazy
                        // src={'assets/images/landing/hero.mp4'} 
                        src={'https://timezzi-bucket.s3.amazonaws.com/lp_assets/1727073048634.mp4'}
                        type="video/mp4" />
                </video>

                <m.span variants={varFade().inUp}>
                    <Box
                        component={MotionViewport}
                        sx={{
                            marginTop: {
                                lg: '17%',
                                md: '17%',
                                sm: 15,
                                xs: 15,
                            },
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="h1"
                            fontWeight={900}
                            textAlign={'center'}
                            color={'#f5f5f5'}
                            sx={{
                                marginX: {
                                    lg: '0',
                                    xs: '1rem',
                                },
                            }}
                        >
                            <div dangerouslySetInnerHTML={{ __html: t('LIFESTYLE_HAS_A_NEW_DIRECTION') }} />
                        </Typography>
                        <Typography
                            component="div"
                            variant="h4"
                            color={'#f5f5f5'}
                            fontWeight={400}
                            sx={{ mb: 5, marginTop: '10px', textAlign: 'center' }}
                        >
                            <div dangerouslySetInnerHTML={{ __html: t('EXPLORE_SERVICES') }} />
                        </Typography>

                        <Box>
                            <TextField
                                fullWidth
                                placeholder={t('SEARCH_SERVICES')}
                                variant="outlined"
                                value={filterText}
                                onChange={handleFilterChange}
                                InputProps={{
                                    endAdornment: <Iconify icon="bi:search" width={28} color="#7955cf" />,

                                    sx: {
                                        borderRadius: '10rem',
                                        background: 'white',
                                        width: {
                                            lg: '35rem',
                                            md: '25rem',
                                            sm: '20rem',
                                            xs: '20rem',
                                        },
                                        minWidth: '20rem',
                                        marginBottom: {
                                            lg: 5,
                                            xs: 3,
                                        },
                                    },
                                }}
                            />
                        </Box>

                        <Grid container justifyContent={'center'}>
                            <Grid item xs={10} sm={10} md={11} lg={11}>
                                <Slider ref={sliderRef} {...settings}>
                                    {chunkedData?.length === 0 ? (
                                        <CarousalItem
                                            t={t}
                                            key={0} // Ensure this key is unique if needed, but using index as key is acceptable for a single item case
                                            card={null} // Adjust if needed
                                            index={0} // Adjust if needed
                                            is470px={is470px}
                                        />
                                    ) : (
                                        chunkedData?.map((chunk, chunkIndex) => (
                                            <CarousalItem
                                                chunkedData={chunkedData}
                                                t={t}
                                                key={chunkIndex} // Ensure this is unique if needed
                                                card={chunk}
                                                index={chunkIndex}
                                                is470px={is470px}
                                            />
                                        ))
                                    )}
                                </Slider>
                            </Grid>
                        </Grid>
                    </Box>
                </m.span>
            </Box>
        </Box>
    );
}

const CarousalItem = ({ t, card, index, isMatched, is470px }) => {
    return (
        <Box
            sx={{
                margin: '.5rem 0',
                // backgroundColor: '#7955CF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                flexDirection: 'row', // Adjust if you want horizontal layout within each item
                flexWrap: 'wrap', // Wrap items within each chunk if needed
                gap: 1, // Space between items
            }}
        >
            {card === null ? (
                <Box
                    sx={{
                        backgroundImage: 'url(/assets/images/landing/bg.png)', // Set the path to your image
                        backgroundSize: 'cover', // Adjust to cover the entire box
                        backgroundPosition: 'center', // Center the background image
                        backgroundRepeat: 'no-repeat', // Prevent repeating of the background image
                        boxShadow: 3,
                        borderRadius: '.5rem',
                        // height: is470px ? '6rem' : '7rem',
                        padding: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        position: 'relative', // Ensure child elements are positioned relative to this box
                        transition: 'all 0.3s ease', // Smooth transition
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{
                            textAlign: 'center',
                            // color: '#ef5350',
                            display: 'block',
                            // textTransform: 'capitalize',
                            marginTop: '-.3rem',
                        }}
                    >
                        {t('Try searching again, and explore areas like Beauty, Wellness, or Freelancers.')}
                    </Typography>
                </Box>
            ) : (
                card?.map((iter, iterIndex) => (
                    <Box
                        key={iter?.id} // Ensure each item has a unique key
                        sx={{
                            boxShadow: 3,
                            cursor: 'pointer',
                            borderRadius: '.5rem',
                            width: is470px ? '12rem' : '8rem',
                            height: is470px ? '' : '7rem',
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: isMatched ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                            transition: 'all 0.3s ease', // Smooth transition
                            '&:hover': {
                                // backgroundColor: '#7955CF', // Background color on hover
                                // color: 'white', // Text color on hover
                                transform: 'scale(1.05)', // Slight scale effect on hover
                                boxShadow: '0 0px 8px rgba(0, 0, 0, 0.5)', // Slightly increased shadow
                            },
                        }}
                    >
                        <Box
                            backgroundColor={'#2196F3'}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                backgroundColor: '#ffffff', // Use iter's data
                                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                            }}
                        >
                            <Iconify color="#7955cf" icon={iter?.icon} width={24} />
                        </Box>

                        <Typography marginTop={'.5rem'} textAlign={'center'} variant="subtitle2">
                            {t(iter?.title)}
                        </Typography>
                    </Box>
                ))
            )}
        </Box>
    );
};

CarousalItem.propTypes = {
    item: PropTypes.object,
};
const cardData = [
    { title: 'Hair Styling', icon: 'mingcute:hair-line', bgIcons: '#e6dcff' },
    {
        title: 'Skincare Treatments',
        icon: 'hugeicons:treatment',
        bgIcons: '#e6dcff',
    },

    {
        title: 'Nail Services',
        icon: 'fluent-emoji-high-contrast:nail-polish',
        bgIcons: '#e6dcff',
    },
    {
        title: 'Foot care',
        icon: 'fluent-emoji-high-contrast:foot',
        bgIcons: '#e6dcff',
    },

    {
        title: 'Tattoo & Piercing',
        icon: 'icon-park-outline:lip-tattoo',
        bgIcons: '#e6dcff',
    },

    {
        title: 'Makeup Services',
        icon: 'icon-park-outline:makeups',
        bgIcons: '#e6dcff',
    },

    {
        title: 'Cosmetic Procedures',
        icon: 'solar:cosmetic-broken',
        bgIcons: '#e6dcff',
    },

    { title: 'Hair Removal', icon: 'mdi:hair-dryer-outline', bgIcons: '#e6dcff' },
    {
        title: 'Aesthetics',
        icon: 'pepicons-pencil:paint-pallet',
        bgIcons: '#e6dcff',
    },

    {
        title: 'Eyebrow & Eyelash',
        icon: 'icon-park-outline:eyebrow',
        bgIcons: '#e6dcff',
    },
    { title: 'Barber', icon: 'hugeicons:chair-barber', bgIcons: '#e6dcff' },
    {
        title: 'Tanning Services',
        icon: 'solar:mask-happly-broken',
        bgIcons: '#e6dcff',
    },

    {
        title: 'Pet Grooming',
        icon: 'material-symbols-light:pet-supplies',
        bgIcons: '#e6dcff',
    },

    {
        title: 'Personal Training',
        icon: 'material-symbols:model-training',
        bgIcons: '#ffe3d5',
    },

    {
        title: 'Chiropractic Services',
        icon: 'material-symbols:foot-bones-outline',
        bgIcons: '#ffe3d5',
    },
    { title: 'Massage Therapy', icon: 'tabler:massage', bgIcons: '#ffe3d5' },
    {
        title: 'Group Fitness Classes',
        icon: 'mingcute:fitness-line',
        bgIcons: '#ffe3d5',
    },

    { title: 'Dance Classes', icon: 'mdi:dance-pole', bgIcons: '#ffe3d5' },
    { title: 'Yoga Classes', icon: 'iconoir:yoga', bgIcons: '#ffe3d5' },

    {
        title: 'Nutrition Counseling',
        icon: 'material-symbols:nutrition-outline',
        bgIcons: '#ffe3d5',
    },

    {
        title: 'Meditation Classes',
        icon: 'solar:meditation-bold',
        bgIcons: '#ffe3d5',
    },
    {
        title: 'Online Fitness Coaching',
        icon: 'mingcute:fitness-line',
        bgIcons: '#ffe3d5',
    },

    {
        title: 'Martial Arts Training',
        icon: 'material-symbols-light:sports-martial-arts',
        bgIcons: '#ffe3d5',
    },
    { title: 'Physical Therapy', icon: 'map:spa', bgIcons: '#ffe3d5' },
    { title: 'Spa Treatments', icon: 'token:spa', bgIcons: '#ffe3d5' },
    {
        title: 'Pilates Classes Gym',
        icon: 'solar:treadmill-linear',
        bgIcons: '#ffe3d5',
    },
    {
        title: 'Sports Training',
        icon: 'icon-park-outline:sport',
        bgIcons: '#ffe3d5',
    },
    { title: 'Gym Memberships', icon: 'cryptocurrency:gold', bgIcons: '#ffe3d5' },

    { title: 'DJ', icon: 'solar:music-note-2-linear', bgIcons: '#d1fAff' },
    { title: 'Private Chef', icon: 'solar:chef-hat-broken', bgIcons: '#d1fAff' },
    { title: 'Photographer', icon: 'bi:camera', bgIcons: '#d1fAff' },
    { title: 'Event Planner', icon: 'carbon:plan', bgIcons: '#d1fAff' },
    { title: 'Florist', icon: 'ph:plant-bold', bgIcons: '#d1fAff' },
    {
        title: 'Personal Shopper',
        icon: 'solar:hanger-2-linear',
        bgIcons: '#d1fAff',
    },
];
