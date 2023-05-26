import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '../utils/yupSchemas';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { registerUser, errors: backEndErrors } = useAuth();
    const [successMessage, setSuccessMessage] = useState();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset: resetForm,
    } = useForm({ resolver: yupResolver(registrationSchema) });

    {
        errors && console.log('form error:', errors);
    }
    const handleRegistration = (data) => {
        registerUser(data);
        resetForm();
        setSuccessMessage('Registered Successfully');
        setTimeout(() => {
            navigate('/');
        }, 1500);
    };
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
                                <h2>REGISTER</h2>
                            </div>
                            {successMessage && (
                                <div className='d-flex justify-content-center p-4 text-warning'>
                                    <h5>{successMessage}</h5>
                                </div>
                            )}
                            <form
                                id='contact'
                                onSubmit={handleSubmit(handleRegistration)}
                            >
                                <div className='row'>
                                    <div className='col-md-6 col-sm-12'>
                                        <fieldset>
                                            <input
                                                name='user_name'
                                                type='text'
                                                id='user_name'
                                                placeholder='User Name'
                                                {...register('user_name')}
                                            />
                                            {errors?.user_name && (
                                                <p className='text-danger p-1'>
                                                    {errors?.user_name?.message}
                                                </p>
                                            )}
                                            {backEndErrors?.errors
                                                ?.user_name && (
                                                <p className='text-danger p-2'>
                                                    {
                                                        errors?.errors
                                                            ?.user_name[0]
                                                    }
                                                </p>
                                            )}
                                        </fieldset>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <fieldset>
                                            <input
                                                name='email'
                                                type='email'
                                                id='email'
                                                placeholder='Your email'
                                                {...register('email')}
                                            />
                                            {errors?.email && (
                                                <p className='text-danger p-2'>
                                                    {errors?.email?.message}
                                                </p>
                                            )}
                                            {backEndErrors?.errors?.email && (
                                                <p className='text-danger p-2'>
                                                    {errors?.errors?.email[0]}
                                                </p>
                                            )}
                                        </fieldset>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <fieldset>
                                            <input
                                                name='phone'
                                                type='phone'
                                                id='phone'
                                                placeholder='Phone number'
                                                {...register('phone')}
                                            />
                                            {errors?.phone && (
                                                <p className='text-danger p-2'>
                                                    {errors?.phone?.message}
                                                </p>
                                            )}
                                            {backEndErrors?.errors?.phone && (
                                                <p className='text-danger p-2'>
                                                    {errors?.errors?.phone[0]}
                                                </p>
                                            )}
                                        </fieldset>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <fieldset>
                                            <input
                                                name='password'
                                                type='password'
                                                id='passwords'
                                                placeholder='Your password'
                                                {...register('password')}
                                            />
                                            {errors?.password && (
                                                <p className='text-danger p-2'>
                                                    {errors?.password?.message}
                                                </p>
                                            )}
                                            {backEndErrors?.errors
                                                ?.password && (
                                                <p className='text-danger p-2'>
                                                    {
                                                        errors?.errors
                                                            ?.password[0]
                                                    }
                                                </p>
                                            )}
                                        </fieldset>
                                    </div>

                                    <div className='col-lg-12 d-flex justify-content-center'>
                                        <fieldset>
                                            <button
                                                type='submit'
                                                id='form-submit'
                                                className='main-button'
                                            >
                                                REGISTER
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

export default Register;
