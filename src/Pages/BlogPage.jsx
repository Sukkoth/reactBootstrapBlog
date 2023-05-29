import { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import SingleBlog from '../Components/BlogPage/SingleBlog';
import SideBar from '../Components/SideBar/SideBar';
import useData from '../Hooks/useData';
import Pagination from '../Components/Pagination';
import BlogListLoader from '../Components/ContentLoaders/BlogListLoader';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    const { fetchBlogs, isLoading, blogsPagination, errors } = useData();
    useEffect(() => {
        const fetch = async () => {
            setBlogs(await fetchBlogs());
        };
        fetch();
    }, []);

    return (
        <>
            <Banner
                mainHeader='RECENT POSTS'
                headerText=' RECENT POSTS OUR RECENT BLOG ENTRIES'
            />
            <section className='blog-posts grid-system'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='all-blog-posts'>
                                <div className='row'>
                                    {isLoading && <BlogListLoader />}
                                    {!isLoading &&
                                        blogs.map((blog) => (
                                            <SingleBlog
                                                key={blog.id}
                                                blog={blog}
                                                isLoading={isLoading}
                                            />
                                        ))}

                                    {!isLoading && blogs.length > 0 && (
                                        <Pagination
                                            blogsPagination={blogsPagination}
                                            fetchBlogs={fetchBlogs}
                                        />
                                    )}
                                </div>
                                {!isLoading && !blogs.length && errors ? (
                                    <div
                                        className='alert alert-warning d-flex justify-content-center'
                                        role='alert'
                                    >
                                        {errors
                                            ? errors.message
                                            : 'There are no blogs currently'}
                                    </div>
                                ) : (
                                    <div
                                        className='alert alert-warning d-flex justify-content-center'
                                        role='alert'
                                    >
                                        There are no blogs currently
                                    </div>
                                )}
                            </div>
                        </div>
                        <SideBar />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
