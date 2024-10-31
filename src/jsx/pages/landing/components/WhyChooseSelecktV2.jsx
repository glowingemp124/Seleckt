import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../pages/landing/assets/css/style.css";

const tabsData = [
    {
        id: 1,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none"><circle cx="10" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" /><path stroke="currentColor" strokeWidth="1.5" d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5Z" /><path fill="currentColor" d="m18.089 12.539l.455-.597zM19 8.644l-.532.528a.75.75 0 0 0 1.064 0zm.912 3.895l-.456-.597zm-1.368-.597c-.487-.371-.925-.668-1.278-1.053c-.327-.357-.516-.725-.516-1.19h-1.5c0 .95.414 1.663.91 2.204c.471.513 1.077.93 1.474 1.232zM16.75 9.7c0-.412.24-.745.547-.881c.267-.118.69-.13 1.171.353l1.064-1.057c-.87-.875-1.945-1.065-2.842-.668A2.46 2.46 0 0 0 15.25 9.7zm.884 3.435c.148.113.342.26.545.376s.487.239.821.239v-1.5c.034 0 .017.011-.082-.044c-.1-.056-.212-.14-.374-.264zm2.732 0c.397-.303 1.003-.719 1.473-1.232c.497-.541.911-1.255.911-2.203h-1.5c0 .464-.189.832-.516 1.19c-.353.384-.791.681-1.278 1.052zM22.75 9.7c0-1-.585-1.875-1.44-2.253c-.896-.397-1.973-.207-2.842.668l1.064 1.057c.48-.483.904-.471 1.17-.353a.96.96 0 0 1 .548.88zm-3.294 2.242a4 4 0 0 1-.374.264c-.099.056-.116.044-.082.044v1.5c.334 0 .617-.123.82-.239c.204-.115.398-.263.546-.376z" /></g></svg>,
        title: "User-Friendly Interface",
    },
    {
        id: 2,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="currentColor" d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89a8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30a8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68a8 8 0 0 1-1.63 11.21M190.92 212a8 8 0 1 1-13.84 8a57 57 0 0 0-98.16 0a8 8 0 1 1-13.84-8a72.06 72.06 0 0 1 33.74-29.92a48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212M128 176a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-56-56a8 8 0 0 0-8-8a24 24 0 1 1 23.24-30a8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68a8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8" /></svg>,
        title: "Quality Candidates",
    },
    {
        id: 3,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-app-window"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M10 4v4" /><path d="M2 8h20" /><path d="M6 4v4" /></svg>,
        title: "Efficiency",
    },
    {
        id: 4,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1" /><path d="M7 .5v2.132a1.5 1.5 0 1 0 0 2.236v4.264a1.5 1.5 0 1 1 0 2.236V13.5" /><path d="M.5 7h2.132a1.5 1.5 0 1 0 2.236 0h4.264a1.5 1.5 0 1 1 2.236 0H13.5" /></g></svg>,
        title: "Control and Choice",
    },
    {
        id: 5,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M3.5 4v12.5a4 4 0 0 0 4 4H20" /><path d="m7 14l3.293-3.293a1 1 0 0 1 1.414 0l1.336 1.336a1 1 0 0 0 1.414 0L19 7.5l.648-.649M15 6.5h3.8c.331 0 .631.134.848.351M20 11.5V7.7c0-.331-.134-.631-.352-.849" /></g></svg>,
        title: "Insightful Analytics",
    },
    {
        id: 6,
        icons: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m5.75 18l-.4-.35q-1.3-1.15-1.825-2.625T3 12.05Q3 9.7 4.187 7.787T7.4 4.85q.35-.2.75-.025t.525.575q.125.375-.012.75t-.488.575q-1.45.8-2.312 2.213T5 12.05q0 1.125.425 2.188T6.75 16.2l.25.25V15q0-.425.288-.712T8 14t.713.288T9 15v4q0 .425-.288.713T8 20H4q-.425 0-.712-.288T3 19t.288-.712T4 18zM17 7.55V9q0 .425-.288.713T16 10t-.712-.288T15 9V5q0-.425.288-.712T16 4h4q.425 0 .713.288T21 5t-.288.713T20 6h-1.75l.4.35q1.025 1.05 1.575 2.225t.7 2.425H18.9q-.125-.875-.537-1.675T17.25 7.8zM17.4 23q-.2 0-.312-.112t-.163-.288l-.225-1.1q-.3-.125-.562-.262T15.6 20.9l-1.075.325q-.175.05-.325-.012T13.95 21l-.6-1q-.1-.15-.05-.325t.175-.3l.825-.725q-.05-.35-.05-.65t.05-.65l-.825-.725q-.125-.125-.175-.3t.05-.325l.6-1q.1-.15.25-.212t.325-.013l1.075.325q.275-.2.538-.337t.562-.263l.225-1.1q.05-.175.163-.288T17.4 13h1.2q.2 0 .313.113t.162.287l.225 1.1q.3.125.563.275t.537.375l1.05-.375q.175-.05.338.013t.262.212l.6 1.05q.1.15.063.325t-.163.3l-.85.725q.05.3.05.625t-.05.625l.825.725q.125.125.175.3t-.05.325l-.6 1q-.1.15-.25.213t-.325.012L20.4 20.9q-.275.2-.537.338t-.563.262l-.225 1.1q-.05.175-.162.288T18.6 23zm.6-3q.825 0 1.413-.587T20 18t-.587-1.412T18 16t-1.412.588T16 18t.588 1.413T18 20" /></svg>,
        title: "Resource Management",
    },
];


const WhyChooseSelecktV2 = () => {
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
                                    <span className="font fw-normal">Seleckt </span>Staff is designed to
                                    revolutionize your recruitment strategy, offering a streamlined
                                    and user-friendly platform tailored to the needs of employers
                                    like you.
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
                        Why choose {" "}
                        <span className="font" style={{ color: "#00B094" }}>
                            Seleckt
                        </span> Staff for your hiring {" "}
                        <span className="font" style={{ color: "#00B094" }}>
                            needs
                        </span>?
                    </h1>
                </motion.div>


                <Row className="py-2 py-md-5 d-flex justify-content-center align-items-center mx-0 px-0" style={{ width: "100%" }}>
                    <Col xs={11} md={12} lg={5} className="py-4 mx-0">
                        <div className="WhyChooseSeleckt_box_parent content d-flex justify-content-center align-items-center flex-wrap">
                            {tabsData?.map((data) => (
                                <div key={data?.id} className="WhyChooseSeleckt_box mx-1 mx-sm-3 my-2">
                                    <div style={{ color: "#00B094" }}>{data?.icons}</div>
                                    <p className="m-0 text-black ">{data?.title}</p>
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
                                <p className=" font fix_wid about_desc">
                                    Our recruitment app streamlines your hiring process with a user-friendly interface, handling everything from job postings to candidate responses. You have complete control and choice over your recruitment process and can fully customize your process to suit your company’s needs, gaining access to top talent through advanced matching algorithms.
                                </p>
                                <p className=" font fix_wid about_desc mt-4">
                                    With resource management tools, efficiently track progress and optimize strategies. Comprehensive analytics provide insights to support data-driven decisions, simplifying recruitment for greater efficiency and success.
                                </p>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default WhyChooseSelecktV2;

