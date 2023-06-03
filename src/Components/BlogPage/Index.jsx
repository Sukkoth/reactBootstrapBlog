import React, { useEffect } from 'react';
import useData from '../../Hooks/useData';
import BlogPage from '../../Pages/BlogPage';

const Index = () => {
    const { fetchBlog } = useData();
    useEffect(() => {
        fetchBlog({
            url: `/api/v1/blogs`,
            method: 'get',
        });
    }, []);
    return <BlogPage />;
};

export default Index;
