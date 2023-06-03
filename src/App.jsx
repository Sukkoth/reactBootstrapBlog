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
import Profile from './Pages/Profile';
import TimeAgo from 'javascript-time-ago';
import Index from './Components/BlogPage/Index';
import Categories from './Components/BlogPage/Categories';
import CustomRouter from './Pages/CustomRouter';

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
                <Route path='blogs' Component={CustomRouter}>
                    <Route index Component={Index} />
                    <Route
                        path='categories/:categoryName'
                        Component={Categories}
                    />
                    <Route path=':blogId' Component={BlogDetail} />
                </Route>
                <Route path='/contact' Component={Contact} />
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
