import React from 'react';
import ContentLoader from 'react-content-loader';

const SideBarContentLoader = () => (
    <ContentLoader viewBox='0 0 350 50'>
        <rect x='10' y='0' rx='4' ry='4' width='300' height='20' />
        <rect x='10' y='30' rx='3' ry='3' width='150' height='15' />
    </ContentLoader>
);
const RecentPostsLoader = () => {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((elt, index) => (
                <li key={index}>
                    <SideBarContentLoader />
                </li>
            ))}
        </>
    );
};

export default RecentPostsLoader;
