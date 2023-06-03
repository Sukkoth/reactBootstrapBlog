import React, { useEffect } from 'react';
import useData from '../../Hooks/useData';
import BlogPage from '../../Pages/BlogPage';
import { useParams } from 'react-router-dom';

const Categories = () => {
    const { fetchBlog } = useData();
    const { categoryName } = useParams();
    useEffect(() => {
        fetchBlog({
            url: `/api/v1/categories/${categoryName}/blogs`,
            method: 'get',
        });
    }, []);
    return <BlogPage />;
};

export default Categories;
