import { useEffect, useState } from 'react';
import axios from './axios';
const useFetchData = (
    requestConfigParam = {
        url: '',
        method: '',
        data: {},
        params: {},
        headers: {},
        auth: {},
    }
) => {
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState([]);
    const [requestConfig, setRequestConfig] = useState(requestConfigParam);

    const fetchData = async (request = {}) => {
        setIsLoading(true);
        setErrors({});
        try {
            console.log('MAKING REQUEST');
            const response = await axios.request({
                ...requestConfig,
                ...request,
            });
            setData(response.data || []);
        } catch (error) {
            if (error?.response?.status === 400) {
                setErrors({ message: 'Bad request' });
            } else if (error?.response?.status === 401) {
                setErrors({ message: 'Unauthorized' });
            } else if (error?.response?.status === 404) {
                setErrors({ message: 'Backend URL not found on server' });
            } else if (error?.response?.status === 422) {
                setErrors({ message: 'Invalid Data, check your inputs' });
            } else if (error?.response?.status === 500) {
                setErrors({ message: 'Internal Server Error' });
            } else if (error?.message) {
                setErrors({ message: error?.message });
            } else {
                console.log('ANOTHER ERROR OCCURED', error);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(requestConfig);
    }, [requestConfig]);

    return { isLoading, errors, data, fetchData };
};

export default useFetchData;
