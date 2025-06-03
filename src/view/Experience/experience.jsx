import React, { useState, useRef, useCallback, useEffect, createRef } from "react";
import { useInView } from 'react-intersection-observer';
import Heading from "../../component/heading";
import "./experience.css"

const leftData = [
    {
        h2: 'Alexion Pharmaceuticals (AstraZeneca)',
        h3: 'Data Analyst and Program Coordinator',
        date: 2024
    },
    {
        h2: 'Northeastern University, Boston, USA',
        h3: 'Masters of Science in Data Analytics Engineering',
        date: 2023
    },
    {
        h2: 'ACG PAM Pharma Technologies',
        h3: 'Data Analyst',
        date: 2021
    },
    {
        h2: 'University of Mumbai, DJSCE Mumbai, INDIA',
        h3: 'Bachelor of Engineering in Electronics',
        date: 2016
    },
]

const rightData = [
    {
        content: "Led the design of real-time Power BI dashboards and automated reporting workflows using Alteryx and Power Automate, improving efficiency by up to 40%. Transformed multi-source data using Power Query and Excel to support strategic insights and KPI alignment. Conducted root cause analyses and built ETL pipelines that enhanced compliance tracking and reduced project delays by 15%."
    },
    {
        content: "Pursuing my Master’s in Data Analytics Engineering at Northeastern University has provided me with a strong foundation in statistical modeling, data visualization, machine learning, and database management. I’ve also gained valuable experience in operations research and supply chain analytics, as well as engineering project management. Through hands-on projects and cross-functional collaboration, I've gained practical experience in translating complex data into actionable insights."
    },
    {
        content: "Conducted detailed data analysis using SQL and Excel to identify inefficiencies, leading to a 15% improvement in operational performance. Built and maintained Excel and Power BI dashboards to enhance reporting accuracy, while managing a digital Service Portal that improved task efficiency for 100+ field engineers. Collaborated cross-functionally using JIRA in an agile setup, reducing project delays by 35% through better issue tracking."
    },
    {
        content: "At the University of Mumbai, I earned my Bachelor's in Electronics Engineering, where I built a strong foundation in circuit design, signal processing, and communication systems. This experience sharpened my analytical thinking and introduced me to the fundamentals of data, systems, and engineering problem-solving"
    }
]

const Experience = () => {
    const [progress, setProgress] = useState(0); // Progress from 0 to 1
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const hasReachedRefs = useRef([]);
    const [opacity, setOpacity] = useState([0.3, 0.3, 0.3, 0.3])

    const { ref: inViewRef, inView } = useInView({
        threshold: 0, // Trigger as soon as any part is visible
    });

    const setRefs = useCallback(
        (node) => {
            containerRef.current = node;
            inViewRef(node);
        },
        [inViewRef]
    );

    // itemRefs.current = leftData.map((_, i) => itemRefs.current[i] ?? createRef());
    useEffect(() => {
        hasReachedRefs.current = leftData.map((_, i) => hasReachedRefs.current[i] ?? false);
    }, [leftData]);

    useEffect(() => {
        // If the container is not in view, ensure progress is 0 (or its resting state)
        if (!inView) {
            // You might want to setProgress(0) here if you want it to reset when out of view.
            // For now, we let it hold its value if it goes out of view after being in.
            // But if it's *initially* not in view, `progress` is already 0 from useState.
            return;
        }

        // This `handleScroll` will now be more robust about starting at 0
        const handleScroll = () => {
            if (!containerRef.current) {
                setProgress(0); // Should not happen if ref is set, but good guard
                return;
            }

            const element = containerRef.current;
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // --- MODIFIED LOGIC TO ENSURE IT STARTS AT 0 ---
            // Define how much the element needs to enter the viewport from the bottom
            // before progress starts. E.g., 5% of its own height, or a fixed pixel value.
            // Let's use a small pixel value for simplicity, e.g., 1px or more.
            // Or, more robustly, ensure rect.top is well above the "just entered" point.

            // Point where the top of the element is considered to have fully entered the
            // "start zone" for calculation. We want progress to be 0 if rect.top is
            // at viewportHeight or just slightly less.
            const scrollStartEffectivePoint = viewportHeight - window.innerHeight * 0.15; // Top of element at bottom of viewport

            // Point where animation should be 100%
            const scrollEndEffectivePoint = 0; // Top of element at top of viewport

            // Current position of the element's top edge
            const elementTop = rect.top;

            // If the element's top is still at or below the very bottom of the viewport, progress is 0.
            if (elementTop >= scrollStartEffectivePoint) {
                setProgress(0);
                return;
            }

            // If the element's top has scrolled past the designated end point (top of viewport), progress is 1.
            if (elementTop <= scrollEndEffectivePoint) {
                setProgress(1);
                return;
            }

            // Calculate progress only within the active range



            itemRefs.current.forEach((ref, index) => {

                const totalDistanceForAnimation =
                    scrollStartEffectivePoint - scrollEndEffectivePoint; // This is essentially viewportHeight
                const distanceScrolledPastStart = scrollStartEffectivePoint - elementTop;

                let currentProgress = 0;
                if (totalDistanceForAnimation > 0) {
                    currentProgress = distanceScrolledPastStart / totalDistanceForAnimation;
                }



                const element = ref;
                if (!element) return;
                // const containerHeight = element.offsetHeight;
                // const containerHeight = containerRef.current.scrollHeight;
                //                 const elementOffsetTop = element.offsetTop; // Relative to container
                //                 const triggerY = currentProgress * containerHeight;

                const elementAbsoluteTop = element.getBoundingClientRect().top + window.scrollY;
                const triggerY = window.scrollY + window.innerHeight * progress;
                const tolerance = viewportHeight - window.innerHeight * 0.10;

                if (
                    triggerY >= elementAbsoluteTop - tolerance &&
                    !hasReachedRefs.current[index]
                ) {
                    hasReachedRefs.current[index] = true;
                    setOpacity((prev) => {
                        if (prev[index] === 1) return prev; // ✅ already visible
                        const newOp = [...prev];
                        newOp[index] = 1;
                        return newOp;
                    });
                }

                // Optional: reset if user scrolls back up
                if (triggerY < elementAbsoluteTop - tolerance) {
                    hasReachedRefs.current[index] = false;
                    setOpacity((prev) => {
                        if (prev[index] === 0) return prev;
                        const newOp = [...prev];
                        newOp[index] = 0.3; // or 0.5 if you want a faded state
                        return newOp;
                    });
                }

                // Clamp progress between 0 and 1 (Math.max already handles negative if elementTop > scrollStartPoint)
                currentProgress = Math.max(0, Math.min(1, currentProgress));
                setProgress(currentProgress);
            });
        };

        // Add scroll listener
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // IMPORTANT: Call once when `inView` becomes true to set initial state based on current scroll.

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [inView]);
    return (
        <div id="experience" className="experienceContainer">
            <div style={{ height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Heading heading="Experience" />
            </div>
            <div className="experienceContentContainer" ref={setRefs}>
                <div className="column dateNTitle mobileNoDisplay">
                    {leftData.map((el, index) => (
                        <div className="trigger-box" ref={(el) => (itemRefs.current[index] = el)} key={index} style={{ opacity: opacity[index], transition: 'opacity 0.6s ease-in-out' }}>
                            <div className="trigger_box-company">
                                <h3>{el.h2}</h3>
                                <h4>{el.h3}</h4>
                            </div>
                            <div className="trigger_box-date">{el.date}</div>
                        </div>
                    ))}
                </div>

                <div className="column scroller-column">
                    <div className="progress-bar-container">
                        <div
                            id="progress"
                            style={{
                                transform: `scaleY(${progress})`,
                            }}
                            aria-valuenow={Math.round(progress * 100)} // For accessibility
                        >
                            <div className="progress-tip"></div>
                        </div>
                    </div>
                </div>

                <div className="column moreInfo mobileNoDisplay">
                    {rightData.map((el, index) => (
                        <div className="trigger-box" key={index} style={{ opacity: opacity[index], transition: 'opacity 0.6s ease-in-out' }}>
                            <p>
                                {el.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mobileDisplay">
                    <div className="column dateNTitle ">
                        {leftData.map((el, index) => (
                            <div className="mobileExp" key={index}>
                            <div className="trigger-box" ref={(el) => (itemRefs.current[index] = el)} style={{ opacity: opacity[index], transition: 'opacity 0.6s ease-in-out' }}>
                                <div className="trigger_box-company">
                                    <h3>{el.h2}</h3>
                                    <h4>{el.h3}</h4>
                                </div>
                                <div className="trigger_box-date">{el.date}</div>
                            </div>
                            <div className="trigger-box" style={{ opacity: opacity[index], transition: 'opacity 0.6s ease-in-out' }}>
                                <p>
                                    {rightData[index].content}
                                </p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience