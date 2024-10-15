import Navbars from './Navbars';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>
           <Navbars />
           
           <div>
                {props.children}
           </div>

           <Footer />
        </>
    )
}
export default Layout;