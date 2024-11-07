import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import NotFound from '../Pages/NotFound';
import AlumniPage from '../Pages/AlumniPage';
import ContactPage from '../Pages/ContactPage';
import HTMLDasar from '../Pages/Materi/HTMLDasar';
import AnggotaPage from '../Pages/AnggotaPage';
import CSSDasar from '../Pages/Materi/CSSDasar';
import JavaScriptDasar from '../Pages/Materi/JavaScriptDasar';

const RouterPage = () => {
    return(
        <>
           <Router>
            <Routes>
                <Route 
                    index 
                    element={<HomePage/>} 
                />
                <Route 
                    path="profil" 
                    element={<AboutPage/>}
                />
				<Route 
                    path="alumni" 
                    element={<AlumniPage/>}
                    />
				<Route 
                    path="news" 
                    element={<ContactPage/>}/>
                <Route 
                    path='keanggotaan' 
                    element={<AnggotaPage/>}/>
				<Route 
                    path="materi/html_dasar" 
                    element={<HTMLDasar/>}/>
                <Route 
                    path="materi/html_dasar/:slug_materi"
                    element={<HTMLDasar/>}/>
                <Route 
                    path='materi/css_dasar' 
                    element={<CSSDasar/>}/>
                <Route 
                    path='materi/javascript_dasar' 
                    element={<JavaScriptDasar/>}/>
                <Route 
                    path="*" 
                    element={<NotFound/>}/>
            </Routes>
           </Router>
        </>
    )
}

export default RouterPage;