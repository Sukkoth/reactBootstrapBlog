import { useState, useEffect, createContext } from 'react';
import axios from '../API/axios';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [blogsPagination, setBlogsPagination] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const fetchBlogs = async (queryParameter = null) => {
        setIsLoading(true);

        try {
            const response = await axios.get('/api/v1/blogs', {
                params: queryParameter,
            });

            setBlogsPagination(
                (({ current_page, from, last_page, per_page, total }) => ({
                    current_page,
                    from,
                    last_page,
                    per_page,
                    total,
                }))(response.data.blogs)
            );
        } catch (error) {
            alert('Failed to fetch blogs');
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchCategories = async () => {
        const localData = JSON.parse(localStorage.getItem('categories'));
        if (localData) {
            setCategories(localData);
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.get('/api/v1/categories');
            localStorage.setItem(
                'categories',
                JSON.stringify(response.data.categories)
            );
            setCategories(response.data.categories);
        } catch (error) {
            alert('Failed to fetch blogs');
            console.log(error);
        } finally {
            setIsLoading(false);
        }
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
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
