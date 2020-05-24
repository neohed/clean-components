import {useEffect} from "react";

function useAddEventListener(
    event,
    callback
) {
    useEffect(() => {
        document.addEventListener(event, callback, false);

        return () => {
            document.removeEventListener(event, callback, false);
        };
    }, [
        event,
        callback
    ]);

}

export default useAddEventListener
