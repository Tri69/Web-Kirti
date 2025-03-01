import Navbars from './Navbars';
import Footer from './Footer';
import NavbarComp from './NavbarComp';
import { Helmet } from 'react-helmet';

const Layout = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props.content}/>
            </Helmet>
           <NavbarComp active="active"/>
           
           <div>
                
                {props.children}
           </div>

           <Footer />
        </>
    )
}
export default Layout;