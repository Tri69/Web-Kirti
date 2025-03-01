import Footer from "../Footer";
import NavbarComp from "../NavbarComp";
import Sidebars from "./Sidebars";
import '../../assets/Styles/sidebar.css';

const LayoutMateri = (props) => {
    return (
        <>
         <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props.content}/>
            </Helmet>
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