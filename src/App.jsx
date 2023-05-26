import Home from './Pages/Home';
import About from './Pages/About';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import BlogPage from './Pages/BlogPage';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import Test from './Pages/Test';
import BlogDetail from './Pages/BlogDetail';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { useEffect } from 'react';
import useAuth from './Hooks/useAuth';
import Profile from './Pages/Profile';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/about' Component={About} />
                <Route path='/blogs' Component={BlogPage} />
                <Route path='/contact' Component={Contact} />
                <Route path='/blogs/:blogId' Component={BlogDetail} />
                <Route path='/test' Component={Test} />
                <Route path='/login' Component={Login} />
                <Route path='/register' Component={Register} />
                <Route path='/profile' Component={Profile} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
