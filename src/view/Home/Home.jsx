import React, { useEffect, useRef, useState } from "react";
import "./home.css"
const titles = ["Data Scientist", "Data Analyst", "Business Analyst"];
const Home = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed = 50; // faster when deleting
        }

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing forward
                setDisplayedText(currentTitle.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex + 1 === currentTitle.length) {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                // Backspacing
                setDisplayedText(currentTitle.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, titleIndex]);

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const screenWidth = window.innerWidth;

            if (leftRef.current) {
                leftRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
            if (rightRef.current) {
                if (screenWidth > 768) {
                    rightRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
                } else {
                    rightRef.current.style.transform = `translateY(0px)`;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div id="home" className="container">
            <div className="leftContainer" ref={leftRef}>
                <div className="nameContainer">
                    <div className="introText">
                        <h1 className="title">
                            Hi, my
                            <br /> name is
                            <span style={{ fontWeight: 'bold' }}> Nidhi.</span>
                        </h1>
                        <h2 className="subtitle">I turn raw data into stories and decisions.</h2>
                    </div>
                </div>
            </div>
            <div className="centerContainer">
                <img src="/assets/nidhi_Portfolio.png" className="mainImage" />
            </div>
            <div className="rightContainer" ref={rightRef}>
                <div className="nameContainer">
                    <span><h1 className="title">I'm a <br /> <span style={{ fontWeight: 'bold' }} className="typing-text">{displayedText}
                        <span className="cursor">|</span></span></h1>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home