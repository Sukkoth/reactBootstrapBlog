import React from 'react';
import { Link } from 'react-router-dom';
import default_blog_thumb_img from '../../assets/images/blog-thumb-01.jpg';
import ReactTimeAgo from 'react-time-ago';
import ContentLoader from 'react-content-loader';

const SingleBlog = ({ thumb_img, blog }) => {
    console.log('IN SINGLE');

    return (
        <div className='col-lg-6'>
            <div className='blog-post'>
                <div className='blog-thumb'>
                    <img src={thumb_img} alt='' />
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
                            Nullam nibh mi, tincidunt sed sapien ut, rutrum
                            hendrerit velit. Integer auctor a mauris sit amet
                            eleifend.
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
