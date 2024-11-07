import Navbars from './Navbars';
import Footer from './Footer';
import NavbarComp from './NavbarComp'
//import SpinnerComp from './SpinnerComp'
const Layout = (props) => {
    return (
        <>
           <NavbarComp active="active"/>
           
           <div>
                
                {props.children}
           </div>

           <Footer />
        </>
    )
}
export default Layout;