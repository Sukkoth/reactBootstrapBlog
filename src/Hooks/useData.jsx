import { useContext } from 'react';
import DataContext from '../Contexts/DataProvider';
const useData = () => {
    const Data = useContext(DataContext);
    return { ...Data };
};

export default useData;
