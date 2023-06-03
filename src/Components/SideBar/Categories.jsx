import useData from '../../Hooks/useData';
import { ScaleLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { categories, categoryLoading } = useData();

    return (
        <div className='col-lg-12'>
            <div className='sidebar-item categories'>
                <div className='sidebar-heading'>
                    <h2>Categories</h2>
                </div>
                <div className='content'>
                    {categoryLoading && (
                        <ScaleLoader
                            loading={categoryLoading}
                            size={150}
                            color='#f48840'
                            cssOverride={{
                                marginInline: '8px',
                                alignSelf: 'center',
                            }}
                            aria-label='Loading Spinner'
                            data-testid='loader'
                        />
                    )}

                    <ul>
                        {!categoryLoading &&
                            categories.map((category) => (
                                <li key={category.id}>
                                    <Link
                                        to={`/blogs/categories/${category.name}`}
                                    >
                                        - {category.name}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;
