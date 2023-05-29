import { useState, useEffect, createContext } from 'react';
import axios from '../API/axios';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [blogsPagination, setBlogsPagination] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({});

    const requestConfig = {};

    const fetchData = async (
        requestConfig = {
            url: '',
            method: '',
            query: {},
            data: {},
            headers: {},
            auth: {},
        }
    ) => {
        try {
            console.log('MAKING REQUEST');
            const response = await axios.request(requestConfig);
            return response.data;
        } catch (error) {
            if (error?.response?.status === 404) {
                setErrors({ message: 'Backend URL not found on server' });
            } else if (error?.response?.status === 500) {
                setErrors({ message: 'Internal Server Error' });
            } else if (error?.message) {
                setErrors({ message: error?.message });
            } else {
                console.log('ANOTHER ERROR OCCURED', error);
            }
        }
    };

    const fetchBlogs = async (queryParameter = null) => {
        setIsLoading(true);
        const requestConfig = {
            url: '/api/v1/blogs',
            method: 'get',
        };

        //set blog data
        const blogData = await fetchData(requestConfig);

        //set pagination
        blogData?.blogs?.current_page &&
            setBlogsPagination(
                (({ current_page, from, last_page, per_page, total }) => ({
                    current_page,
                    from,
                    last_page,
                    per_page,
                    total,
                }))(blogData)
            );
        setIsLoading(false);
        return blogData?.blogs?.data || [];
    };

    const fetchCategories = async () => {
        setIsLoading(true);
        const localData = JSON.parse(localStorage.getItem('categories'));
        if (localData) {
            setCategories(localData);
            setIsLoading(false);
            return;
        }

        const categoriesData = await fetchData({ url: '/api/v1/categories' });
        categories.Datacategories &&
            localStorage.setItem(
                'categories',
                JSON.stringify(categoriesData.categories)
            );
        setCategories(categoriesData.categories);
        setIsLoading(false);
        return;
    };

    return (
        <DataContext.Provider
            value={{
                blogs,
                fetchBlogs,
                categories,
                fetchCategories,
                isLoading,
                blogsPagination,
                errors,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
