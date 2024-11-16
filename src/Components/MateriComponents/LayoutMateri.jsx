import Footer from "../Footer";
import NavbarComp from "../NavbarComp";
import Sidebars from "./Sidebars";
import '../../assets/Styles/sidebar.css';

const LayoutMateri = (props) => {
    return (
        <>
            <NavbarComp />
            <Sidebars />
            <div>
                {props.children}
            </div>
            <Footer />
        </>
    )
}
export default LayoutMateri;