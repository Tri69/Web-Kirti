import { Navigate, NavigationType, Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import Sidebars from '../../Components/MateriComponents/Sidebars'
import '../../assets/Styles/html.module.css';
import Container from 'react-bootstrap/Container';
import gambar from '../../assets/kegiatan.jpg'

const HTMLDasar = () => {

    return (
        <>
            <Layout><br/><br/><br/><br/><br/>
            <Container>
                <h1 class="text-center">HTML Dasar</h1><hr/>
                <div class="row" data-masonry='{"percentPosition": true }'>
                    <div class="col-sm-6 col-lg-4 mb-4"><Link to={"/materi/html/form"}>
                        <div class="card">
                            <img class="bd-placeholder-img card-img-top" width="100%" height="200" src={gambar} />
                            <div class="card-body">
                                <h5 class="card-title">FORM INPUT</h5>
                                <p class="card-text">Materi tetang dasar form Action di dalam HTML</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div></Link>
                    </div>
                           
                    <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card"><Link to={"/materi/html/form-input"}>
                            <img class="bd-placeholder-img card-img-top" width="100%" height="200" src={gambar} />
                            <div class="card-body">
                                <h5 class="card-title">FORM INPUT</h5>
                                <p class="card-text">Materi tetang dasar form Action di dalam HTML</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div></Link>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4 mb-4"><Link to={"/materi/html/form-select"}>
                        <div class="card">
                            <img class="bd-placeholder-img card-img-top" width="100%" height="200" src={gambar} />
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
