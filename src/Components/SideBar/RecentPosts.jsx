import ReactTimeAgo from 'react-time-ago';
import useData from '../../Hooks/useData';
import { Link } from 'react-router-dom';
import RecentPostsLoader from '../ContentLoaders/RecentPostsLoader';

const RecentPosts = () => {
    const { blogs, isLoading } = useData();
    return (
        <div className='col-lg-12'>
            <div className='sidebar-item recent-posts'>
                <div className='sidebar-heading'>
                    <h2>Recent Posts</h2>
                </div>

                <div className='content'>
                    <ul>
                        {/* DISPLAY CONTENT LOADER */}
                        {isLoading && <RecentPostsLoader />}

                        {/* DISPLAY THE FETCHED DATA */}
                        {!isLoading &&
                            blogs &&
                            blogs.map((blog) => (
                                <li key={blog.id}>
                                    <Link>
                                        <h5>{blog.title}</h5>
                                        <span>
                                            <ReactTimeAgo
                                                locale='en-us'
                                                date={new Date(blog.created_at)}
                                            />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecentPosts;
