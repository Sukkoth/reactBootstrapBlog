import React, { useEffect, useState } from 'react';
import Action from '../Components/Action';
import AllBlogs from '../Components/AllBlogs';
import SideBar from '../Components/SideBar/SideBar';
import Banner from '../Components/Banner';
import ClipLoader from 'react-spinners/ClipLoader';

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
                // cssOverride={override}
                size={25}
                aria-label='Loading Spinner'
                data-testid='loader'
            />
            <section className='blog-posts'>
                <div className='container'>
                    <div className='row'>
                        <AllBlogs />
                        <SideBar />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
