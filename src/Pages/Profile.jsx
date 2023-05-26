import { useEffect } from 'react';
import axios from '../API/axios';
import useAuth from '../Hooks/useAuth';
const Profile = () => {
    const { csrf } = useAuth();
    useEffect(() => {
        const getUser = async () => {
            console.log('Getting User');
            // await csrf();
            const response = await axios.get('api/v1/auth/user');
            console.log(response);
        };

        getUser();
    });
    return <div>Profile</div>;
};

export default Profile;
