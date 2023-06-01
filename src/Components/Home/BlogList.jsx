import blog_post_01 from '../../assets/images/blog-post-01.jpg';
import { Link } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import ReactTimeAgo from 'react-time-ago';
import useFetchData from '../../API/useFetchData';

const BlogList = () => {
    const {
        data: blogData,
        isLoading,
        errors: blogErrors,
    } = useFetchData({
        method: 'get',
        url: '/api/v1/blogs/suggestions',
        params: {
            limit: 5,
        },
    });

    return (
        <div className='col-lg-8'>
            <div className='all-blog-posts'>
                <div className='row'>
                    <div className='col-lg-12'>
                        {isLoading && (
                            <div className='loader d-flex justify-content-center p-5'>
                                <ScaleLoader
                                    loading={isLoading}
                                    size={150}
                                    color='#f48840'
                                    cssOverride={{
                                        marginInline: '8px',
                                        alignSelf: 'center',
                                    }}
                                    aria-label='Loading Spinner'
                                    data-testid='loader'
                                />
                            </div>
                        )}
                        {!isLoading &&
                            blogData?.blogs &&
                            blogData?.blogs?.map((blog) => (
                                <div className='blog-post' key={blog.id}>
                                    <div className='blog-thumb'>
                                        <img src={blog_post_01} alt='' />
                                    </div>
                                    <div className='down-content'>
                                        <span>{blog?.category?.name}</span>
                                        <Link to={`blogs/${blog.id}`}>
                                            <h4>{blog?.title}</h4>
                                        </Link>
                                        <ul className='post-info'>
                                            <li>
                                                <Link>
                                                    {blog?.author?.full_name}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    <ReactTimeAgo
                                                        date={
                                                            new Date(
                                                                blog?.created_at
                                                            )
                                                        }
                                                    />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>12 Comments</Link>
                                            </li>
                                        </ul>
                                        <p>
                                            Stand Blog is a free HTML CSS
                                            template for your CMS theme. You can
                                            easily adapt or customize it for any
                                            kind of CMS or website builder. You
                                            are allowed to use it for your
                                            business. You are NOT allowed to
                                            re-distribute the template ZIP file
                                            on any template collection site for
                                            the download purpose. for more info.
                                            Thank you.
                                        </p>
                                        <div className='post-options'>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <ul className='post-tags'>
                                                        <li>
                                                            <i className='fa fa-tags'></i>
                                                        </li>
                                                        <li>
                                                            <Link>Beauty</Link>,
                                                        </li>
                                                        <li>
                                                            <Link>Nature</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='col-6'>
                                                    <ul className='post-share'>
                                                        <li>
                                                            <i className='fa fa-share-alt'></i>
                                                        </li>
                                                        <li>
                                                            <Link>
                                                                Facebook
                                                            </Link>
                                                            ,
                                                        </li>
                                                        <li>
                                                            <Link>Twitter</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        {!isLoading && !blogData?.blogs?.length && (
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
                    {!isLoading && blogData?.blogs?.length > 0 && (
                        <div className='col-lg-12'>
                            <div className='main-button'>
                                <Link to='/blogData.blogs'>View All Posts</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
