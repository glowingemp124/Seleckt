import React, { useState, useEffect } from "react";

export default function MoveToTop() {
    const [showButton, setShowButton] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

    useEffect(() => {
        const handleScroll = () => setShowButton(window.scrollY > 600);
        const handleResize = () => setIsMobile(window.innerWidth < 650);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="moveTop"
                    aria-label="Scroll to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="topArrow"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                        />
                    </svg>
                </button>
            )}
        </>
    );
}
