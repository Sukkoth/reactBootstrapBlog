import React from 'react';
import ContentLoader from 'react-content-loader';

const ListLoader = () => (
    <ContentLoader
        style={{ padding: '0', margin: '0' }}
        viewBox='0 10 200 380'
        foregroundColor='#f5efe6'
    >
        <rect x='0' y='0' rx='0' ry='0' width='400' height='500' />
    </ContentLoader>
);
const BlogListLoader = () => {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((elt, index) => (
                <div className='col-lg-6' key={index}>
                    <div className='blog-post'>
                        <ListLoader />
                    </div>
                </div>
            ))}
        </>
    );
};

export default BlogListLoader;
