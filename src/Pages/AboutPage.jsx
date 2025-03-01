import Layout from "../Components/Layout"
import kirti from '../assets/kirti_stemsago.png'
const AboutPage =() => {
    return (
        <>
            <Layout title="About Page | KIRTI SMKN 1 Gombong" content="ABOUT KIRTI STEMSAGO">
                <br/><br/><br/>
                
                <center>
                    <h1>AboutPage</h1>
                    <h3>Coming Son</h3>
                    <img src={kirti} width="200" height="200"/>
                </center>
            </Layout>
        </>
    )
}
export default AboutPage;