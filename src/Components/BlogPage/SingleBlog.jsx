import React from 'react';
import { Link } from 'react-router-dom';
import default_blog_thumb_img from '../../assets/images/blog-thumb-01.jpg';
import ReactTimeAgo from 'react-time-ago';

const SingleBlog = ({ blog }) => {
    return (
        <div className='col-lg-6'>
            <div className='blog-post'>
                <div className='blog-thumb'>
                    <img
                        src={blog?.cover}
                        alt=''
                        style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'fill',
                        }}
                    />
                </div>
                <div className='down-content'>
                    <>
                        <span>{blog?.category?.name}</span>
                        <Link to={`/blogs/${blog.id}`}>
                            <h4>{blog?.title}</h4>
                        </Link>
                        <ul className='post-info'>
                            <li>
                                <Link>{blog?.author?.full_name}</Link>
                            </li>
                            <li>
                                <Link>
                                    <ReactTimeAgo
                                        locale='en-us'
                                        date={new Date(blog.created_at)}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link>12 Comments</Link>
                            </li>
                        </ul>
                        <p>
                            {blog?.body.substring(0, 130)} ....
                            <Link
                                className='text-warning'
                                to={`/blogs/${blog.id}`}
                            >
                                Read More
                            </Link>
                        </p>
                        <div className='post-options'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <ul className='post-tags'>
                                        <li>
                                            <i className='fa fa-tags'></i>
                                        </li>
                                        <li>
                                            <a href='#'>Best Templates</a>,
                                        </li>
                                        <li>
                                            <a href='#'>TemplateMo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};

SingleBlog.defaultProps = {
    thumb_img: default_blog_thumb_img,
};

export default SingleBlog;
