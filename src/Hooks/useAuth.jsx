import { useContext } from 'react';
import AuthContext from '../Contexts/AuthProvide';

const useAuth = () => {
    const AUTH = useContext(AuthContext);
    return AUTH;
};

export default useAuth;
