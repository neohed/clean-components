import {useState, useEffect} from "react";
import {determineInputWidthFromText} from "./autoCompleteUtils";

function useDetermineInputWidthFromText(
    offsetText,
    computedFontStyles
) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(
            determineInputWidthFromText(offsetText, computedFontStyles)
        )
    }, [
        offsetText,
        computedFontStyles,
    ])

    return width
}

export default useDetermineInputWidthFromText
