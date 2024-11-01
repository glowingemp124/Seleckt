import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../pages/landing/assets/css/style.css";

const tabsData = [
    {
        id: 1,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none"><circle cx="10" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" /><path fill="currentColor" d="m18.043 12.366l.444-.605zM19 8.69l-.519.542a.75.75 0 0 0 1.038 0zm.957 3.675l-.444-.605zm-.957.462v.75zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093c-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321zM16.75 9.697c0-.576.263-.827.492-.907c.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776c-.933.327-1.496 1.226-1.496 2.323zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971c-.348.403-.809.786-1.226 1.093zm2.35-3.273c0-1.097-.562-1.996-1.496-2.323c-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443c.228.08.491.33.491.907zM17.6 12.97c.368.27.782.608 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287zm1.913-1.21a4 4 0 0 1-.42.289c-.053.029-.069.029-.093.029v1.5c.618 0 1.032-.337 1.4-.608z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M13 20.615c-.91.247-1.926.385-3 .385c-3.866 0-7-1.79-7-4s3.134-4 7-4s7 1.79 7 4c0 .345-.077.68-.22 1" /></g></svg>,
        title: "User-Friendly Interface",
    },
    {
        id: 2,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M16 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m2.9-6q.1-.486.1-1a5 5 0 1 0-9.9 1" /><path d="M7 7.993h9c2.828 0 4.243 0 5.121.88c.879.878.879 2.293.879 5.123v2.001c0 2.83 0 4.245-.879 5.124C20.243 22 18.828 22 16 22h-6c-3.771 0-5.657 0-6.828-1.172S2 17.769 2 13.996v-2c0-3.774 0-5.66 1.172-6.833C4.115 4.22 5.52 4.036 8 4h2" /></g></svg>,
        title: "Choose your pay date",
    },
    {
        id: 3,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-3-5V6a4 4 0 0 1 8 0" /></g></svg>,
        title: "Access jobs instantly",
    },
    {
        id: 4,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1" /><path d="M7 .5v2.132a1.5 1.5 0 1 0 0 2.236v4.264a1.5 1.5 0 1 1 0 2.236V13.5" /><path d="M.5 7h2.132a1.5 1.5 0 1 0 2.236 0h4.264a1.5 1.5 0 1 1 2.236 0H13.5" /></g></svg>,
        title: "Control and Choice",
    },

    {
        id: 5,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" /></svg>,
        title: "Pick your work hours and location",
    },
    {
        id: 6,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.9 9.9 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8" /></svg>,
        title: "Transparent Communication",
    },
];

const ChooseSelecktForJobSearchV2 = () => {
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setSmallScreen(window.innerWidth < 426);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Container
                fluid
                className="font text-center"
                style={{
                    margin: "0rem 0",
                    paddingBottom: "0rem",
                    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3)",
                    backgroundColor: "#fff",
                }}
            >
                <Row className="font justify-content-center">
                    {/* GREAN BOX TEXT */}
                    <Col
                        md={12}
                        xs={12}
                        style={{
                            backgroundColor: "#00B094",
                            boxShadow: "0 -4px 4px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 100 }} // Starts off invisible and below the viewport
                            whileInView={{ opacity: 1, y: 0 }} // Animates to visible and moves up
                            viewport={{ once: true, amount: 0.3 }} // Triggers once, when 20% of the element is in view
                            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
                        >
                            <div
                                className="d-flex justify-content-center align-items-center p-4"
                                style={{ minHeight: "9rem" }}
                            >
                                <h3 className="boxes_text"
                                >
                                    <span className="font fw-normal">Seleckt</span> Staff is here to connect
                                    you with exciting job opportunities that match your skills,
                                    experience, and career goals. Our platform offers a seamless and
                                    personalized job search experience tailored for workers like you.
                                </h3>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>


            <div className={`d-flex flex-column justify-content-center flex-wrap py-5 ${smallScreen ? "px-0" : "px-4"}`}
                style={{
                    margin: "0rem 0",
                    paddingBottom: "5rem",
                    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3)",
                    backgroundColor: "#FAFAFA",
                }}>

                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1
                        className="font whyChooseMainHeading text-center mb-3 px-1 "
                        style={{ fontWeight: 600 }}
                    >
                        Why choose
                        <span className="font" style={{ color: "#00B094" }}>
                            {" "}Seleckt{" "}
                        </span>
                        Staff for your job {" "}
                        <span className="font" style={{ color: "#00B094" }}>
                            search
                        </span>?
                    </h1>
                </motion.div>


                <Row className="py-2 py-md-5 d-flex justify-content-center align-items-center mx-0 px-0" style={{ width: "100%" }}>
                    <Col xs={11} md={12} lg={5} className="py-4 mx-0">
                        <div className="WhyChooseSeleckt_box_parent content d-flex justify-content-center align-items-center flex-wrap">
                            {tabsData?.map((data) => (
                                <div key={data?.id} className="WhyChooseSeleckt_box mx-1 mx-sm-3 my-2">
                                    <div style={{ color: "#120179" }}>{data?.icons}</div>
                                    <p className="m-0 text-black">{data?.title}</p>
                                </div>
                            ))}
                        </div>
                    </Col>

                    <Col xs={11} md={12} lg={5} className="d-flex justify-content-center mt-3">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >

                            <div className="d-flex flex-column">
                                <p className="font fix_wid about_desc ">
                                    Our app provides a user-friendly interface to easily browse and apply for jobs. With access to a variety of positions, you have complete control and choice allowing you to customize your work schedule and location to fit your lifestyle. You can manage your earnings by selecting your pay date, which supports better financial management.
                                </p>
                                <p className="font fix_wid about_desc mt-4 ">
                                    We prioritize transparent communication and offer career growth opportunities, supporting your professional development. Discover a flexible and empowering way to work with us!
                                </p>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ChooseSelecktForJobSearchV2;