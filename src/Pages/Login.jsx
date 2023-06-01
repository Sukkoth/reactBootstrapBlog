import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import ClipLoader from 'react-spinners/ClipLoader';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('password');
    const { errors, login, setErrors, USER } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await login({ email, password });
        setIsLoading(false);
    };
    // useEffect(() => {
    //     setErrors({});
    // }, [email, password]);

    // useEffect(() => {
    //     USER?.email && navigate('/');
    // }, []);

    return (
        <section className='contact-us'>
            <div className='container'>
                <div className='row'>
                    <div
                        className='down-contact col-12 d-flex justify-content-center align-items-center mt-5'
                        style={{
                            minHeight: '530px',
                        }}
                    >
                        <div className='sidebar-item contact-form mt-5 auth-form'>
                            <div className='sidebar-heading'>
                                <h2>LOGIN</h2>
                            </div>

                            <form id='contact' action='' onSubmit={handleLogin}>
                                {errors?.message && (
                                    <p className='text-danger text-center text-uppercase p-3 mb-4 bg-light'>
                                        {errors.message}
                                    </p>
                                )}
                                <div className='row'>
                                    <div className='col-md-12 col-sm-12'>
                                        <fieldset>
                                            <input
                                                name='email'
                                                type='email'
                                                id='email'
                                                placeholder='Your email'
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                style={{
                                                    marginBottom: '1px',
                                                }}
                                            />
                                            {errors?.errors?.email && (
                                                <p className='text-danger p-2 mt-0 pt-0'>
                                                    {errors?.errors?.email[0]}
                                                </p>
                                            )}
                                        </fieldset>
                                    </div>
                                    <div className='col-md-12 col-sm-12 mt-md-3'>
                                        <fieldset>
                                            <input
                                                name='password'
                                                type='password'
                                                id='password'
                                                placeholder='Your password'
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                style={{ marginBottom: '1px' }}
                                            />
                                            {errors?.errors?.password && (
                                                <p className='text-danger p-2'>
                                                    {
                                                        errors?.errors
                                                            ?.password[0]
                                                    }
                                                </p>
                                            )}
                                        </fieldset>
                                    </div>

                                    <div className='col-lg-12 mt-4'>
                                        <fieldset className='d-flex justify-content-center'>
                                            <button
                                                type='submit'
                                                id='form-submit'
                                                className='main-button'
                                                disabled={isLoading}
                                            >
                                                {!isLoading && 'Login'}
                                                <ClipLoader
                                                    loading={isLoading}
                                                    size={20}
                                                    color='white'
                                                    cssOverride={{
                                                        marginInline: '8px',
                                                    }}
                                                    aria-label='Loading Spinner'
                                                    data-testid='loader'
                                                />
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
