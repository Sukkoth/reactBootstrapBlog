import * as yup from 'yup';

const email = yup
    .string()
    .required('Email field is required')
    .email('Field must be valid email address');

const user_name = yup
    .string()
    .required('User name filed is required')
    .min(6, 'User name field must atleast be 6 characters');

const password = yup
    .string()
    .required('Password field is required')
    .min(6, 'Password field must atleast be 6 characters');

const phone = yup.string().required('Phone field is required');

export const registrationSchema = yup.object().shape({
    email,
    user_name,
    password,
    phone,
});

export const loginSchema = yup.object().shape({
    email,
    password,
});
