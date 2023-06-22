import Banner from '../Components/Banner';
import Action from '../Components/Action';
import SideBar from '../Components/SideBar/SideBar';
import blog_post_02 from '../assets/images/blog-post-02.jpg';
import Comments from '../Components/Comments/Comments';
import { Link, useParams } from 'react-router-dom';
import useFetchData from '../API/useFetchData';
import ReactTimeAgo from 'react-time-ago';

const BlogDetail = () => {
    const { blogId } = useParams();
    const {
        data: blogData,
        isLoading,
        fetchData,
    } = useFetchData(
        {
            url: `/api/v1/blogs/${blogId}`,
            method: 'get',
        },
        true
    );

    return (
        <>
            <Banner />
            <Action />
            <section className='blog-posts grid-system'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='all-blog-posts'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='blog-post'>
                                            <div className='blog-thumb'>
                                                <img
                                                    src={blogData?.blog?.cover}
                                                    alt=''
                                                />
                                            </div>
                                            {Object.keys(blogData) && (
                                                <div className='down-content'>
                                                    <span>
                                                        {
                                                            blogData?.blog
                                                                ?.category?.name
                                                        }
                                                    </span>
                                                    <Link>
                                                        <h4>
                                                            {
                                                                blogData?.blog
                                                                    ?.title
                                                            }
                                                        </h4>
                                                    </Link>
                                                    <ul className='post-info'>
                                                        <li>
                                                            <a href='#'>
                                                                {
                                                                    blogData
                                                                        ?.blog
                                                                        ?.author
                                                                        ?.full_name
                                                                }
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>
                                                                <ReactTimeAgo
                                                                    locale='en-us'
                                                                    date={
                                                                        new Date(
                                                                            blogData
                                                                                ?.blog
                                                                                ?.created_at ||
                                                                                new Date()
                                                                        )
                                                                    }
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='#comments'>
                                                                10 Comments
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        {blogData?.blog?.body}
                                                    </p>
                                                    <div className='post-options'>
                                                        <div className='row'>
                                                            <div className='col-6'>
                                                                <ul className='post-tags'>
                                                                    <li>
                                                                        <i className='fa fa-tags'></i>
                                                                    </li>
                                                                    <li>
                                                                        <a href='#'>
                                                                            Best
                                                                            Templates
                                                                        </a>
                                                                        ,
                                                                    </li>
                                                                    <li>
                                                                        <a href='#'>
                                                                            TemplateMo
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className='col-6'>
                                                                <ul className='post-share'>
                                                                    <li>
                                                                        <i className='fa fa-share-alt'></i>
                                                                    </li>
                                                                    <li>
                                                                        <a href='#'>
                                                                            Facebook
                                                                        </a>
                                                                        ,
                                                                    </li>
                                                                    <li>
                                                                        <a href='#'>
                                                                            {' '}
                                                                            Twitter
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <Comments />
                                    <div className='col-lg-12'>
                                        <div className='sidebar-item submit-comment'>
                                            <div className='sidebar-heading'>
                                                <h2>Your comment</h2>
                                            </div>
                                            <div className='content'>
                                                <form
                                                    id='comment'
                                                    action='#'
                                                    method='post'
                                                >
                                                    <div className='row'>
                                                        <div className='col-md-6 col-sm-12'>
                                                            <fieldset>
                                                                <input
                                                                    name='name'
                                                                    type='text'
                                                                    id='name'
                                                                    placeholder='Your name'
                                                                    required=''
                                                                />
                                                            </fieldset>
                                                        </div>
                                                        <div className='col-md-6 col-sm-12'>
                                                            <fieldset>
                                                                <input
                                                                    name='email'
                                                                    type='text'
                                                                    id='email'
                                                                    placeholder='Your email'
                                                                    required=''
                                                                />
                                                            </fieldset>
                                                        </div>
                                                        <div className='col-md-12 col-sm-12'>
                                                            <fieldset>
                                                                <input
                                                                    name='subject'
                                                                    type='text'
                                                                    id='subject'
                                                                    placeholder='Subject'
                                                                />
                                                            </fieldset>
                                                        </div>
                                                        <div className='col-lg-12'>
                                                            <fieldset>
                                                                <textarea
                                                                    name='message'
                                                                    rows='6'
                                                                    id='message'
                                                                    placeholder='Type your comment'
                                                                    required=''
                                                                ></textarea>
                                                            </fieldset>
                                                        </div>
                                                        <div className='col-lg-12'>
                                                            <fieldset>
                                                                <button
                                                                    type='submit'
                                                                    id='form-submit'
                                                                    className='main-button'
                                                                >
                                                                    Submit
                                                                </button>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SideBar />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetail;
