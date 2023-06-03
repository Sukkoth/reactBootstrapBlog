import { useState, useEffect, createContext } from 'react';
import useFetchData from '../API/useFetchData';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const {
        data: blogData,
        isLoading: blogLoading,
        fetchData: fetchBlog,
        errors: blogErrors,
    } = useFetchData(
        {
            url: '/api/v1/blogs',
            method: 'get',
        },
        false
    );

    const { data: categoryData, isLoading: categoryLoading } = useFetchData({
        url: '/api/v1/categories',
        method: 'get',
    });

    return (
        <DataContext.Provider
            value={{
                blogData,
                blogLoading,
                fetchBlog,
                blogErrors,

                categories: categoryData?.categories || [],
                categoryLoading,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
