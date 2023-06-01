import React, { useEffect } from 'react';
import useData from '../Hooks/useData';

const Test = () => {
    const { blogData, blogLoading, fetchBlog } = useData();

    return (
        <section className='contact-us'>
            <div className='container'>
                <div className='row'>
                    <div
                        className='down-contact col-12 d-flex justify-content-center align-items-center mt-5'
                        style={{
                            minHeight: '150px',
                        }}
                    >
                        <div className='sidebar-item contact-form mt-5 auth-form'>
                            <div className='sidebar-heading'>
                                <h2>LOGIN</h2>
                                <button
                                    onClick={() =>
                                        fetchBlog({
                                            params: {
                                                page: 6,
                                            },
                                        })
                                    }
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Test;
