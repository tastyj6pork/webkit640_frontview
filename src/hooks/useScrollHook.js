import { useEffect, useRef, useCallback } from "react";

const useScrollCount = (end = 1, start = 0, duration = 1000) => {
    const element = useRef();
    const observer = useRef(null);
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const handleScroll = useCallback(([entry]) => {
        const { current } = element;
        if(entry.isIntersecting) {
            let currentNumber = start;
            const counter = setInterval(() => {
                currentNumber += 1;
                current.innerHTML = currentNumber;
                if (currentNumber === end) {
                    clearInterval(counter);
                    observer.current.disconnect(element.current);
                }
            }, stepTime)
        }
    }, [end, start, stepTime, element]);

    useEffect(() => {
        if (element.current) {
            observer.current = new IntersectionObserver(handleScroll, { threshold: 0.7 });
            observer.current.observe(element.current);
        };
        return () => observer && observer.current.disconnect();
    }, [handleScroll]);

    return {
    ref: element,
    };
}

export default useScrollCount;