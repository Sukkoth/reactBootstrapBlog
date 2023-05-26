import { useEffect } from 'react';
import useData from '../../Hooks/useData';
import { ScaleLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { categories, fetchCategories, isLoading } = useData();
    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <div className='col-lg-12'>
            <div className='sidebar-item categories'>
                <div className='sidebar-heading'>
                    <h2>Categories</h2>
                </div>
                <div className='content'>
                    {!categories && (
                        <ScaleLoader
                            loading={true}
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
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link>- {category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;
