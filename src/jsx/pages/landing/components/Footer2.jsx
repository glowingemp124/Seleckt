import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { _socials } from 'src/_mock';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { Button, InputAdornment, TextField } from '@mui/material';
import EmailInboxIcon from 'src/assets/icons/email-inbox-icon';
import { useLocales } from 'src/locales';
import { useState } from 'react';
import * as Yup from 'yup';
import { useSnackbar } from 'src/components/snackbar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider, {
    RHFMultiSelect,
    RHFSelect,
    RHFTextField,
    RHFUploadAvatar,
} from 'src/components/hook-form';

const SOCIALS = [
    { name: 'Facebook', href: 'https://www.facebook.com/people/Timezzi/61561168651268/' },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/timezzi_com?igsh=MWsxeWpnY3o4MHNsOA%3D%3D&utm_source=qr',
    },
    { name: 'Linkedin', href: 'https://www.linkedin.com/company/timezzi/?viewAsMember=true' },
    { name: 'Tiktok', href: 'https://www.tiktok.com/@timezzi.com?_t=8pitjqBkyi9&_r=1' },
];

const LINKS = [
    {
        headline: 'About Timezzi',
        children: [
            { name: 'Home', href: '' },
            { name: 'About Us', href: paths.about },
            { name: 'Become Partner', href: paths.becomePartner },
            { name: 'Become Sponsor', href: paths.becomeSponsor },
            { name: 'Pricing Plan', href: paths.pricing },
        ],
    },
    {
        headline: 'Legal',
        children: [
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms & Condition', href: '/tac' },
        ],
    },
    {
        headline: 'Find Us',
        children: SOCIALS,
    },
];

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

export default function Footer() {
    const pathname = usePathname();

    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();

    const [inputData, setInput] = useState('');

    const isHome = pathname === '/';

    const { t } = useLocales();

    const handleSubmit = (e) => {
        try {
            if (validateEmail(inputData)) {
                enqueueSnackbar('Is Email');
            } else {
                enqueueSnackbar('Invalid Email!', {
                    variant: 'error',
                    autoHideDuration: 500,
                });
            }

            // let response = await addNewSposnorShips(newData);
            // console.log('Response = ', response);

            // if (response.error) {
            //   enqueueSnackbar('Failed!', {
            //     variant: 'error',
            //     autoHideDuration: 500,
            //   });
            // } else {
            //   enqueueSnackbar('Success!');
            //   reset({ name: '', email: '', companyName: '', description: '' });
            // }
        } catch (error) {
            console.error(error);
        }
    };

    const mainFooter = (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                bgcolor: 'background.default',
                // background: 'linear-gradient(to left, #1c1235, black)',
                background: '#f5f5f5',
                color: 'black', // set text color to white
            }}
        >
            <Divider />

            <Container
                sx={{
                    pt: 10,
                    pb: 5,
                    textAlign: { xs: 'center', md: 'unset' },
                }}
            >
                <Logo sx={{ mb: 3 }} />

                <Grid
                    container
                    justifyContent={{
                        xs: 'center',
                        md: 'space-between',
                    }}
                >
                    <Grid xs={12} sm={8} md={5}>
                        <Typography
                            variant="body2"
                            sx={{
                                maxWidth: 270,
                                mx: { xs: 'auto', md: 'unset' },
                            }}
                        >
                            {t('Enter your email address to subscribe for newsletter.')}
                        </Typography>

                        <Grid
                            item
                            xs={2}
                            sm={2}
                            sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}
                        >
                            <TextField
                                fullWidth
                                name="email"
                                variant="outlined"
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={t('Enter your email address')}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailInboxIcon />
                                        </InputAdornment>
                                    ),
                                    sx: {
                                        borderRadius: '.5rem 0 0 .5rem',
                                        backgroundColor: '#F5F5F5',
                                    },
                                }}
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                style={{
                                    borderRadius: theme.direction === 'rtl' ? '.5rem 0 0 .5rem' : '0 .5rem .5rem 0',
                                    height: '100%',
                                    minHeight: '53px',
                                    maxWidth: '7rem',
                                }}
                                mt={5}
                            >
                                {t('Continue')}
                            </Button>
                        </Grid>

                        <Stack
                            direction="row"
                            justifyContent={{ xs: 'center', md: 'flex-start' }}
                            sx={{
                                mt: 3,
                                mb: { xs: 5, md: 0 },
                            }}
                        >
                            {SOCIALS?.map((v) => (
                                <IconButton aria-label={v.name} sx={{ mr: 1 }}>
                                    <Link href={v.href} target="_blank" rel="noopener" underline="none">
                                        <Iconify color="#fafafa" icon={`ri:${v.name?.toLowerCase()}-fill`} width={30} />
                                    </Link>
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={6} display={{ xs: ' none', sm: ' block', md: 'block', lg: 'block' }}>
                        <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
                            {LINKS.map((list) => (
                                <Stack
                                    key={list.headline}
                                    spacing={2}
                                    alignItems={{ xs: 'center', md: 'flex-start' }}
                                    sx={{ width: 1 }}
                                >
                                    <Typography component="div">{t(list.headline)}</Typography>

                                    {list.children.map((link) => (
                                        <Link
                                            key={link.name}
                                            component={RouterLink}
                                            target="_blank"
                                            href={link.href}
                                            color="inherit"
                                            variant="body2"
                                            sx={{ color: 'white' }} // set link color to white
                                        >
                                            {t(link.name)}
                                        </Link>
                                    ))}
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={6} display={{ xs: ' block', sm: ' block', md: 'none', lg: 'none' }}>
                        <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
                            <Stack
                                key={LINKS[1].headline}
                                spacing={2}
                                alignItems={{ xs: 'center', md: 'flex-start' }}
                                sx={{ width: 1 }}
                            >
                                <Typography component="div">{t(LINKS[1].headline)}</Typography>

                                {LINKS[1].children.map((link) => (
                                    <Link
                                        key={link.name}
                                        component={RouterLink}
                                        href={link.href}
                                        target="_blank"
                                        color="inherit"
                                        variant="body2"
                                        sx={{ color: 'white' }} // set link color to white
                                    >
                                        {t(link.name)}
                                    </Link>
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: 10,
                        mb: 6,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="body2">{t('© 2024. All rights reserved')}</Typography>
                    <Button
                        color="primary"
                        href="https://wa.me/+971589960305?text="
                        target="_blank"
                        variant="contained"
                        style={{
                            color: '#fafafa',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '.5rem',
                            cursor: 'pointer',
                            padding: '.8rem',
                        }}
                    >
                        <Iconify width={28} icon="logos:whatsapp-icon" />{' '}
                        <span style={{ padding: '0rem .3rem' }}>{t('Chat With Us')}</span>
                    </Button>
                </Box>
            </Container>
        </Box>
    );

    // return isHome ? simpleFooter : mainFooter;
    return mainFooter;
}
