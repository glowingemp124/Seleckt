import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [options, setOptions] = useState({});
    const getProfile = useCallback((options = {}) => {
        setOptions(options);
        setIsLoading(true);
    }, []);
    useEffect(() => {
        if (!isLoading) {
            return
        }
        const fetchData = async () => {
            try {
                await fetch(url, options)
                    .then((response) => {
                        return response.json()
                    })
                    .then((response) => {
                        if (response.status === 200) {
                            setResponse(response);
                            setIsLoading(false);
                        }
                        else {
                            throw new Error(response.message);
                        }
                    })
            } catch (error) {
                const data = error ? error.message : "Server Error"
                setError(data)
            }
        }
        fetchData();
    }, [isLoading, url, options])
    return [{ response, error, isLoading }, getProfile];
};

export default useFetch;