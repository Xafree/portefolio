import { useEffect, useRef, useState } from "react";
import "./ScrollAnimation.css";

export const ScrollAnimation = ({ children }: { children: React.ReactNode }) => {

    const [isVisible, setIsVisible] = useState(false);
    /*We get the reference of children, here is a div HTML*/
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 } // L’élément doit être visible à 20% pour déclencher l’animation
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`scroll-animation ${isVisible ? "visible" : ""}`}>
            {children}
        </div>
    );
};

