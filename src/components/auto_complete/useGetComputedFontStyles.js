import {useState, useEffect} from "react";

function useGetComputedFontStyles(element) {
    const [computedStyles, setComputedStyles] = useState({});

    useEffect(() => {
        if (element) {
            const searchInputStyles = window.getComputedStyle(element);
            const fontSize = searchInputStyles.getPropertyValue("font-size");
            const fontFamily = searchInputStyles.getPropertyValue("font-family");

            setComputedStyles({
                fontFamily,
                fontSize
            })
        }
    }, [element])

    return computedStyles
}

export default useGetComputedFontStyles
