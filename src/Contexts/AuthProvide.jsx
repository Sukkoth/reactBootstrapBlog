import axios from '../API/axios';
import { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useData from '../Hooks/useData';
import useFetchData from '../API/useFetchData';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    //states and variables
    const [auth, setAuth] = useState({});
    const [errors, setErrors] = useState({});
    const { fetchData } = useData();

    const navigate = useNavigate();

    const registerUser = async (registrationData) => {
        const request = {
            method: 'post',
            url: '/api/v1/auth/register',
            data: registrationData,
        };
        try {
            const response = await axios.request(request);
            setAuth(response.data);
            localStorage.setItem('auth', JSON.stringify(response.data));
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    /**
     *
     * @param {Object} loginCredentials
     * @desc logs in the user
     */
    const login = async (loginCredentials) => {
        try {
            const response = await axios.post(
                'api/v1/auth/login',
                loginCredentials
            );
            if (response.status === 200) {
                setAuth(response.data);
                localStorage.setItem('auth', JSON.stringify(response.data));
                navigate('/');
            } else {
                alert('OTHER RESPONSE');
            }
        } catch (error) {
            if (error?.response?.data) {
                setErrors(error?.response?.data);
            } else {
                setErrors({ message: error?.message });
            }
        }
    };

    /**
     *
     * @desc get user data
     */

    const getUserInfo = async () => {
        const localData = localStorage.getItem('auth');
        if (localData) {
            setAuth(JSON.parse(localData));
            return true;
        } else {
            console.log('No local found');
            return false;
        }
    };

    /**
     * @desc logs out the user
     */

    const logout = async () => {
        console.log('LOGGING OUT');
        try {
            setAuth({});
            localStorage.removeItem('auth');
        } catch (error) {
            alert('Error Logging out');
        }
    };

    useEffect(() => {
        setAuth(JSON.parse(localStorage.getItem('auth')));
    }, []);

    return (
        <AuthContext.Provider
            value={{
                AUTH: auth,
                login,
                errors,
                setErrors,
                logout,
                getUserInfo,
                registerUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

/**
 *
 * LOGIN
 *  Store token and user info in localstorage and in context
 * get user info
 *  read from backend and store to localstorage
 * logout
 *  send api logout
 *  destroy localstorage
 */
