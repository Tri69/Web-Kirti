import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import NotFound from '../Pages/NotFound';
import AlumniPage from '../Pages/AlumniPage';
import NewsPage from '../Pages/NewsPage';
import HTMLDasar from '../Pages/Materi/HTMLDasar';
import AnggotaPage from '../Pages/AnggotaPage';
import CSSDasar from '../Pages/Materi/CSSDasar';
import JavaScriptDasar from '../Pages/Materi/JavaScriptDasar';
import MateriRender from '../Components/MateriComponents/MateriRender';

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
                    element={<NewsPage/>}/>
                <Route 
                    path='keanggotaan' 
                    element={<AnggotaPage/>}/>
				<Route 
                    path="html_dasar" 
                    element={<HTMLDasar />}/>
                <Route 
                    path="materi/html/:url"
                    element={<MateriRender />}/>
                <Route 
                    path='css_dasar' 
                    element={<CSSDasar/>}
                    />
                <Route 
                    path='javascript_dasar' 
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
