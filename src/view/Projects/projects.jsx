import React, { useEffect, useRef, useState } from "react";
import Heading from "../../component/heading";
import "./project.css"

const projectsData = [
    {
        name: "Predicting Player Online Gaming Behavior",
        tools: "Python (Pandas, scikit-learn), SHAP, Google Colab,  Matplotlib, Seaborn.",
        info: "Developed and evaluated classification models to predict user engagement in gaming, uncovering key behavioral drivers through model interpretation and informing data-driven retention strategies.",
        link: "https://github.com/NidhiU-24/Predicting-Player-Online-Gaming-Behavior"
    },
    {
        name: "Bar Crawl Detecting Heavy Drinking",
        tools: "Python (Pandas, NumPy), SciPy, Matplotlib, Seaborn, Google Colab, Tableau.",
        info: "Applied time series analysis and classification techniques to detect behavioral patterns associated with heavy drinking, leveraging entropy-based features for predictive modeling and early intervention insights.",
        link: "https://github.com/NidhiU-24/Bar-Crawl-Detecting-Heavy-Drinking"
    },
    {
        name: "NYC TLC Trip Record Analysis Insights into Urban Mobility Patterns",
        tools: "R (dplyr, ggplot2, lubridate, sf, leaflet), RStudio, SQL, PowerBI",
        info: "Performed exploratory and geospatial analysis on NYC taxi trip data to identify urban mobility patterns and tipping behavior, supporting insights for predictive modeling and transportation optimization.",
        link: "https://github.com/NidhiU-24/NYC-TLC-Trip-Record-Analysis-Insights-into-Urban-Mobility-Patterns"
    },
    {
        name: "Fitness and Health Management for NBA players",
        tools: "SQL (MySQL), MongoDB, Tableau, Python (Pandas, NumPy), UML/EER modeling, Excel.",
        info: "Developed a centralized data system to analyze and manage NBA player health, fitness, and performance metrics, enabling data-driven insights for injury trends, rehabilitation, and training optimization.",
        link: "https://github.com/NidhiU-24/Fitness-and-Health-management-for-NBA-players"
    },
    {
        name: "Urban spatial order: street network orientation, configuration, and entropy",
        tools: "Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, SciPy), Google Colab",
        info: "Applied clustering techniques to analyze street network patterns across 100 global cities, uncovering spatial similarities based on features like circuity, orientation entropy, and connectivity to support urban planning insights.",
        link: "https://github.com/NidhiU-24/Urban-spatial-order-street-network-orientation-configuration-and-entropy"
    },
    {
        name: "PwC Switzerland Job Simulation",
        tools: "Power BI, DAX, Excel, Power Query",
        info: "Completed a job simulation with PwC Switzerland, building interactive Power BI dashboards to analyze call center performance, customer retention, and HR diversity metrics, showcasing data-driven solutions across business functions.",
        link: "https://github.com/NidhiU-24/PwC-Switzerland-Power-BI-Job-Simulation"
    }

]

const Project = () => {
    const trackRef = useRef(null);
    const stickyContainerRef = useRef(null);
    const scrollWrapperRef = useRef(null);
    const projectContentRef = useRef(null);

    const [currentTranslateX, setCurrentTranslateX] = useState(0);
    const translateXRef = useRef(0);
    const maxHorizontalScrollRef = useRef(0);
    const horizontalScrollVerticalDistanceRef = useRef(0);

    useEffect(() => {
        translateXRef.current = currentTranslateX;
    }, [currentTranslateX]);
    useEffect(() => {
        const calculateDimensions = () => {
            if (projectContentRef.current && scrollWrapperRef.current && trackRef.current && stickyContainerRef.current && window.innerWidth > 768) {
                const scrollContentWidth = projectContentRef.current.scrollWidth;
                const visibleWidth = scrollWrapperRef.current.clientWidth;
                maxHorizontalScrollRef.current = Math.max(0, scrollContentWidth - visibleWidth);
                const DURATION_IN_VIEWPORT_HEIGHTS = 2.5;
                const calculatedHorizontalScrollDistance = DURATION_IN_VIEWPORT_HEIGHTS * window.innerHeight;
                horizontalScrollVerticalDistanceRef.current = calculatedHorizontalScrollDistance;
                trackRef.current.style.height = `calc(100vh + ${calculatedHorizontalScrollDistance}px)`;
            }
        };

        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);
        return () => window.removeEventListener('resize', calculateDimensions);
    }, []);

    useEffect(() => {
        const width = window.innerWidth
        const stickyEl = stickyContainerRef.current;
        const trackEl = trackRef.current;
        const contentEl = projectContentRef.current;

        if (!stickyEl || !trackEl || !contentEl || window.innerWidth <= 768) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const trackOffsetTop = trackEl.offsetTop;
            const scrollStartPoint = trackOffsetTop;
            const scrollEndPoint = trackOffsetTop + horizontalScrollVerticalDistanceRef.current;

            let newTX = 0;
            let inHorizontalScrollZone = false;

            if (scrollY >= scrollStartPoint && scrollY <= scrollEndPoint) {
                inHorizontalScrollZone = true;
                const progress = (scrollY - scrollStartPoint) / horizontalScrollVerticalDistanceRef.current;
                newTX = progress * maxHorizontalScrollRef.current;
            } else if (scrollY < scrollStartPoint) {
                newTX = 0;
            } else {
                newTX = maxHorizontalScrollRef.current;
            }

            newTX = Math.max(0, Math.min(newTX, maxHorizontalScrollRef.current));

            contentEl.style.transform = `translateX(-${newTX}px)`;
            setCurrentTranslateX(newTX);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigateGithub = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    }


    return (
        <div id="projects" className="horizontalScrollTrack" ref={trackRef}>
            <div className="projectContainer" ref={stickyContainerRef}>
                <div style={{ height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Heading heading="My Work" />
                </div>
                <div className="scroll-wrapper" ref={scrollWrapperRef}>
                    <div className="projectContentContainer" ref={projectContentRef}>
                        {projectsData.map((project, index) => (
                            <div className="projectCard" key={index} onClick={() => navigateGithub(project.link)}>
                                <img src={`assets/project_${index + 1}.jpeg`} alt={project.name} style={{ order: `${index % 2 == 0 ? 2 : 1}` }} />
                                <div className="projectContent" style={{ order: `${index % 2 == 0 ? 1 : 2}` }}>
                                    <div className="row1">
                                        <div className="projectIndex">0{index + 1}</div>
                                        <div className="projectTitle">{project.name}</div>
                                    </div>
                                    <div className="row2">
                                        <div className="projectTools">Info and Tools:</div>
                                        <div className="projectDetails">{project.info}</div>
                                        <div className="projectDetails">{project.tools || "Key technologies and methodologies used."}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Content AFTER the horizontal scroll track will appear here and be scrollable */}
        </div>
    );
};

export default Project;