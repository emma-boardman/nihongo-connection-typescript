import { useEffect } from "react";

export const useOnClickOutside = (ref, handler, currentState) => {
    useEffect(() => {
        if (!currentState) {
            return;
        }
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, handler, currentState]);
};
