import Banner from '../Components/Banner';
import SingleBlog from '../Components/BlogPage/SingleBlog';
import SideBar from '../Components/SideBar/SideBar';
import Pagination from '../Components/Pagination';
import BlogListLoader from '../Components/ContentLoaders/BlogListLoader';
import useData from '../Hooks/useData';

const BlogPage = () => {
    const { blogData, blogLoading, fetchBlog, blogErrors } = useData();

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
                                    {blogLoading && <BlogListLoader />}
                                    {!blogLoading &&
                                        blogData?.blogs?.map((blog) => (
                                            <SingleBlog
                                                key={blog.id}
                                                blog={blog}
                                                blogLoading={blogLoading}
                                            />
                                        ))}

                                    {!blogLoading &&
                                        blogData?.blogs?.length > 0 && (
                                            <Pagination
                                                blogsPagination={
                                                    blogData.pagination
                                                }
                                                fetchBlogs={fetchBlog}
                                            />
                                        )}
                                </div>
                                {!blogLoading && !blogData?.blogs?.length && (
                                    <div
                                        className='alert alert-warning d-flex justify-content-center'
                                        role='alert'
                                    >
                                        {blogErrors
                                            ? blogErrors.message
                                            : 'There are no blogs currently'}
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
