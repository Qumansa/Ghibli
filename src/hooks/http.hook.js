import { useState, useCallback } from "react";

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async ({url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}, isLoaded = true}) => {
        setLoading(true);

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            if (isLoaded) {
                setLoading(false);
            }
            
            return data;
        } catch(e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    return {error, loading, request, setLoading}
};

export default useHttp;