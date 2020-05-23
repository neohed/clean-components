import {useState, useEffect} from "react";

function useGetComputedFontStyles(targetElementRef) {
    const [computedStyles, setComputedStyles] = useState({});

    useEffect(() => {
        const element = targetElementRef.current;

        if (element) {
            const searchInputStyles = window.getComputedStyle(element);
            const fontSize = searchInputStyles.getPropertyValue("font-size");
            const fontFamily = searchInputStyles.getPropertyValue("font-family");

            setComputedStyles({
                fontFamily,
                fontSize
            })
        }
    }, [targetElementRef])

    return computedStyles
}

export default useGetComputedFontStyles
