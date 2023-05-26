import Banner from '../Components/Banner';
import Action from '../Components/Action';
import SideBar from '../Components/SideBar/SideBar';
import blog_post_02 from '../assets/images/blog-post-02.jpg';
import Comments from '../Components/Comments/Comments';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
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
                                                    src={blog_post_02}
                                                    alt=''
                                                />
                                            </div>
                                            <div className='down-content'>
                                                <span>Lifestyle</span>
                                                <Link>
                                                    <h4>
                                                        Aenean pulvinar gravida
                                                        sem nec
                                                    </h4>
                                                </Link>
                                                <ul className='post-info'>
                                                    <li>
                                                        <a href='#'>Admin</a>
                                                    </li>
                                                    <li>
                                                        <a href='#'>
                                                            May 12, 2020
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='#comments'>
                                                            10 Comments
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p>
                                                    You can browse different
                                                    tags such as{' '}
                                                    <a
                                                        rel='nofollow'
                                                        href='https://templatemo.com/tag/multi-page'
                                                        target='_parent'
                                                    >
                                                        multi-page
                                                    </a>
                                                    ,{' '}
                                                    <a
                                                        rel='nofollow'
                                                        href='https://templatemo.com/tag/resume'
                                                        target='_parent'
                                                    >
                                                        resume
                                                    </a>
                                                    ,{' '}
                                                    <a
                                                        rel='nofollow'
                                                        href='https://templatemo.com/tag/video'
                                                        target='_parent'
                                                    >
                                                        video
                                                    </a>
                                                    , etc. to see more CSS
                                                    templates. Sed hendrerit
                                                    rutrum arcu, non malesuada
                                                    nisi. Sed id facilisis
                                                    turpis. Donec justo elit,
                                                    dapibus vel ultricies in,
                                                    molestie sit amet risus. In
                                                    nunc augue, rhoncus sed
                                                    libero et, tincidunt tempor
                                                    nisl. Donec egestas, quam eu
                                                    rutrum ultrices, sapien ante
                                                    posuere nisl, ac eleifend
                                                    eros orci vel ante.
                                                    Pellentesque vitae eleifend
                                                    velit. Etiam blandit felis
                                                    sollicitudin vestibulum
                                                    feugiat.
                                                    <br />
                                                    <br />
                                                    Donec tincidunt leo nec
                                                    magna gravida varius.
                                                    Suspendisse felis orci,
                                                    egestas ac sodales quis,
                                                    venenatis et neque. Vivamus
                                                    facilisis dignissim arcu et
                                                    blandit. Maecenas finibus
                                                    dui non pulvinar lacinia. Ut
                                                    lacinia finibus lorem vel
                                                    porttitor. Suspendisse et
                                                    metus nec libero ultrices
                                                    varius eget in risus. Cras
                                                    id nibh at erat pulvinar
                                                    malesuada et non ipsum.
                                                    Suspendisse id ipsum leo.
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
