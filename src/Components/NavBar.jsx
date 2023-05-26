import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const NavBar = () => {
    const location = useLocation();
    const { AUTH, logout } = useAuth();

    return (
        <header className=''>
            <nav className='navbar navbar-expand-lg'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>
                        <h2>
                            Stand Blog<em>.</em>
                        </h2>
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarResponsive'
                        aria-controls='navbarResponsive'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div
                        className='collapse navbar-collapse'
                        id='navbarResponsive'
                    >
                        <ul className='navbar-nav ml-auto'>
                            <li
                                className={`nav-item ${
                                    location.pathname === '/' && 'active'
                                }`}
                            >
                                <Link className='nav-link' to='/'>
                                    Home
                                    <span className='sr-only'>(current)</span>
                                </Link>
                            </li>

                            <li
                                className={`nav-item ${
                                    location.pathname.startsWith('/blog') &&
                                    'active'
                                }`}
                            >
                                <Link className='nav-link' to='/blogs'>
                                    Blog Entries
                                </Link>
                            </li>

                            <li
                                className={`nav-item ${
                                    location.pathname === '/about' && 'active'
                                }`}
                            >
                                <Link className='nav-link' to='/about'>
                                    About Us
                                </Link>
                            </li>
                            <li
                                className={`nav-item ${
                                    location.pathname === '/contact' && 'active'
                                }`}
                            >
                                <Link className='nav-link' to='/contact'>
                                    Contact Us
                                </Link>
                            </li>

                            {!AUTH?.user ? (
                                <>
                                    <li
                                        className={`nav-item ${
                                            location.pathname === '/login' &&
                                            'active'
                                        }`}
                                    >
                                        <Link className='nav-link' to='/login'>
                                            Login
                                        </Link>
                                    </li>
                                    <li
                                        className={`nav-item ${
                                            location.pathname === '/register' &&
                                            'active'
                                        }`}
                                    >
                                        <Link
                                            className='nav-link'
                                            to='/register'
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li
                                        className={`nav-item ${
                                            location.pathname === '/profile' &&
                                            'active'
                                        }`}
                                    >
                                        <Link
                                            className='nav-link'
                                            to='/profile'
                                        >
                                            Profile
                                        </Link>
                                    </li>

                                    <li className='nav-item'>
                                        <Link
                                            className='nav-link'
                                            onClick={logout}
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
/**
 *
 *
 *
 */
