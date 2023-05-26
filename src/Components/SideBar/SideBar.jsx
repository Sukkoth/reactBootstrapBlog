import Categories from './Categories';
import RecentPosts from './RecentPosts';
import Search from './Search';
import Tags from './Tags';

const SideBar = () => {
    return (
        <div className='col-lg-4'>
            <div className='sidebar'>
                <div className='row'>
                    <Search />
                    <RecentPosts />
                    <Categories />
                    <Tags />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
