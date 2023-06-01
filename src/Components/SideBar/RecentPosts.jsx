import ReactTimeAgo from 'react-time-ago';
import useData from '../../Hooks/useData';
import { Link } from 'react-router-dom';
import RecentPostsLoader from '../ContentLoaders/RecentPostsLoader';
import useFetchData from '../../API/useFetchData';

const RecentPosts = () => {
    const { data: blogData, isLoading } = useFetchData({
        method: 'get',
        url: '/api/v1/blogs/suggestions',
        params: {
            limit: 5,
        },
    });
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
                            blogData.blogs &&
                            blogData.blogs.map((blog) => (
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
