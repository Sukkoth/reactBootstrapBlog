import React, { useEffect, useState } from 'react';
import Action from '../Components/Action';
import SideBar from '../Components/SideBar/SideBar';
import Banner from '../Components/Banner';
import ClipLoader from 'react-spinners/ClipLoader';
import BlogList from '../Components/Home/BlogList';

const Home = () => {
    return (
        <>
            <Banner
                mainHeader='Bloggy'
                headerText='GREAT PLACE TO SHARE IDEA!'
            />
            <Action />
            <ClipLoader
                color='fb9857'
                loading={false}
                size={25}
                aria-label='Loading Spinner'
                data-testid='loader'
            />
            <section className='blog-posts'>
                <div className='container'>
                    <div className='row'>
                        <BlogList />
                        <SideBar />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
