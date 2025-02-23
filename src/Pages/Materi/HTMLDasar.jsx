import {Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import '../../assets/Styles/html.css';
import Container from 'react-bootstrap/Container';
import gambar1 from '../../assets/1.png'
import gambar2 from '../../assets/2.png'
import gambar3 from '../../assets/3.png'

const HTMLDasar = () => {

    return (
        <>
            <Layout><br/><br/><br/><br/><br/>
            <Container>
                <h1 class="text-center">HTML Dasar</h1><hr/>
                <div class="row" data-masonry='{"percentPosition": true }'>
                    <div class="col-sm-6 col-lg-4 mb-4"><Link to={"/materi/html/form"}>
                        <div class="card">
                            <img class="bd-placeholder-img card-img-top" width="100%" height="180" src={gambar3} />
                            <div class="card-body">
                                <h5 class="card-title">TEXT ELEMENT</h5>
                                <p class="card-text">Materi tetang dasar Text Element di dalam HTML</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div></Link>
                    </div>
                           
                    <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card"><Link to={"/materi/html/form-input"}>
                            <img class="bd-placeholder-img card-img-top" width="100%" height="180" src={gambar2} />
                            <div class="card-body">
                                <h5 class="card-title">IMAGE</h5>
                                <p class="card-text">Materi tetang dasar image element di dalam HTML</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div></Link>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4 mb-4"><Link to={"/materi/html/form-select"}>
                        <div class="card">
                            <img class="bd-placeholder-img card-img-top" width="100%" height="180" src={gambar1} />
                            <div class="card-body">
                                <h5 class="card-title">FORM INPUT</h5>
                                <p class="card-text">Materi tetang dasar form Action di dalam HTML</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div></Link>
                    </div>

                </div>
            </Container>
            </Layout>

        </>
    )
}

export default HTMLDasar;
