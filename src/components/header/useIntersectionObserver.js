import { useState, useEffect } from "react";

// https://dev.to/billyjacoby/intersectionobserver-api-with-react-hooks-3e99?signin=true

const useIntersectionObserver = (
    ref,
    { threshold, root, rootMargin }
) => {
    // configure the state
    const [state, setState] = useState({
        inView: false,
        triggered: false,
        entry: undefined
    });
console.log('Instantiate IntersectionObserver');
    const observer = new IntersectionObserver(
        (entries, observerInstance) => {
            // checks to see if the element is intersecting
            if (entries[0].intersectionRatio > 0) {
                // if it is update the state, we set triggered as to not re-observe the element
                setState({
                    inView: true,
                    triggered: true,
                    entry: observerInstance
                });
                // unobserve the element
                observerInstance.unobserve(ref.current);
            }
            //return;
        },
        {
            threshold: threshold || 0,
            root: root || null,
            rootMargin: rootMargin || "0%"
        }
    );

    useEffect(() => {
        // check that the element exists, and has not already been triggered
        if (ref.current && !state.triggered) {
            observer.observe(ref.current);
        }
    });

    return [state.inView, state.entry];
};

export default useIntersectionObserver;
