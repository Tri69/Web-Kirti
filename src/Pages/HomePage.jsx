import Layout from "../Components/Layout";
import '../App.css';
import kegiatan from '../assets/kegiatan.jpg';
import programming from '../assets/programming.png';
import kegiatanmingguan from '../assets/kegiatan-mingguan.png';
import networking from '../assets/networking.png';
import { Link } from "react-router-dom";
import CompProfilHome from "../Components/HomeComponent/CompProfilHome";
import BeritaCom from "../Components/HomeComponent/BeritaCom";
import kegiatan1 from '../assets/kegiatan-1.jpg';
import kegiatan2 from '../assets/kegiatan-2.jpg';
import { Card } from "react-bootstrap";

const HomePage = () => {
	return (
		<>
			<Layout>
				<div className="container-body">
					<div className="caption-body">
						<br /><br /><br /><br />
						<h1> Welcome To The <b className="text-primary">KIRTI Organization</b></h1>
						<h3>Information Technology, Programming, Networking and Research <br />
							Organizations and Extracurriculars.
							-SMK N1 Gombong</h3>
						<Link to="materi"><button type="button" class="btn btn-primary btn-md">Daftar Sekarang!</button></Link>
						<Link to="from-daftar"><button type="button" class="btn btn-light btn-md">Learn More</button></Link>
						<br /><br /><br /><br />
					</div>
				</div>
				<div class="section-1">
					<div class="container col-xxl-8 px-4 py-5">
						<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
							<div class="col-10 col-sm-8 col-lg-6">
								<img src={kegiatan} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" id="foto-section"/>
							</div>
							<div class="col-lg-6">
								<h3 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">KIRTI Organizations <b className="text-primary">&lt;/Technology&gt;</b><br /> for Human Beings</h3>
								<p class="lead">KIRTI is an Organizations of SMK N1 Gombong which
									was inaugurated on February 11, 2011. As name implies,
									KIRTI ing engaded in the field of Information Technology(IT).
									With the existence of KIRTI, it is expected to provide
									a clear and real contribution to SMK N1 Gombong.</p>
								<div class="d-grid gap-2 d-md-flex justify-content-md-start">
									<button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Just Now</button>
									<button type="button" class="btn btn-outline-secondary btn-lg px-4">Lets GO</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div>
					<div class="container">
						<div>
							<h2 class="text-center">Visi and Misi</h2><hr/>
							<div class="visi">
								<h3>Visi</h3>
								<div class="visi-card">
									<img src={programming}  width="50px" height="50px"/>
									<p>
										To become a center of excellence in the field of Information
										Technology at SMKN 1 Gombong, contributing to the advancement and 
										development of information technology to improve human life quality.
									</p>
								</div>
							</div>
							<div class="misi">
								<h3>Misi</h3>
								<div>
								<div class="misi-card">
									<img src={programming}  width="50px" height="50px"/>
									<p>
										To develop and echance memebers skills in the field of information Technology 
										through joint learning activities, training, and workshops.
									</p>
								</div>
								<div class="misi-card">
									<img src={programming}  width="50px" height="50px"/>
									<p>
										To share knowledge and exprertise in the field of Information Technology 
										with the school community and wider public.
									</p>
								</div>
								<div class="misi-card">
									<img src={programming}  width="50px" height="50px"/>
									<p>
										To develop and apply innovative and creative information Technology to improve life
										quality and national progress, through three braches of Information Technology, namely
										Networking, and Web programming.
									</p>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="section-2">
					<div class="container  px-4 py-5" id="featured-3" >
                        <h2 class="pb-2 border-bottom text-center"><b class="line-title">Extra</b>curricular Activities </h2>
						<div class="row g-2 py-5 row-cols-1 row-cols-lg-3 " id="pad" >
							<div class="feature col " id="box-col" className="Active-Feature">
								<div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-2 mb-3">
									<img class="bi" width="40px" height="40px" src={programming} />
								</div>
								<h3 class="fs-2">Programming</h3>
								<p>Programming is the process of creating programs on a computer, which will produce
									software. KIRTI studied Web Developer(HTML, CSS, JavaScript) and FullStack.</p>
								<a href="#" class="icon-link">
									Call to action
									<svg class="bi"><use xlink: href="#chevron-right" /></svg>
								</a>
							</div>
							<div class="feature col " id="box-col">
								<div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-2 mb-3">
									<img class="bi" width="40px" height="40px" src={networking} />
								</div>
								<h3 class="fs-2">Networking</h3>
								<p>One the functions of a computer networks is to communicate and share data with
									each other. KIRTI studied: Linux Fundamental, VLAN Routing, Switch Fundamentals, Web Server.</p>
								<a href="#" class="icon-link">
									Call to action
									<svg class="bi"><use xlink: href="#chevron-right" /></svg>
								</a>
							</div>
							<div class="feature col" id="box-col">
								<div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-2 mb-3">
									<img class="bi" width="40px" height="40px" src={kegiatanmingguan} />
								</div>
								<h3 class="fs-2">Community Activity</h3>
								<p>Apart from the 2 main activities, KIRTI also has annual activities, namely Sharring
									free Takjil in the month Ramadan and IT Socialization to the Community.</p>
								<a href="#" class="icon-link">
									Call to action
									<svg class="bi"><use xlink: href="#chevron-right" /></svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
				<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div class="carousel-inner" id="overflow-x">
						<div class="carousel-item active">
							<img src={kegiatan1} class="d-block w-100" alt="..." />
							<div class="carousel-caption  d-md-block">
								<h5>First slide label</h5>
								<p>Some representative placeholder content for the first slide.</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src={kegiatan2}class="d-block w-100" alt="..." />
							<div class="carousel-caption  d-md-block">
								<h5>Second slide label</h5>
								<p>Some representative placeholder content for the second slide.</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src={kegiatan} class="d-block w-100" alt="..." />
							<div class="carousel-caption d-none d-md-block" >
							<h5>Third slide label</h5>
							<p>Some representative placeholder content for the third slide.</p>
							</div>
						</div>
					</div>
                    </div>
				</div><br/><br/><br/>
				
				<div>
					<CompProfilHome/>
				</div><br></br><br/><br/>

				<div class="container">
					<div>
                        <h2 class="text-center"><b class="line-title">Q & A </b>KIRTI</h2>
						<hr/>
					</div>

					<div class="accordion accordion-flush" id="accordionFlushExample">

						<div class="accordion-item">

							<h2 class="accordion-header" id="flush-headingOne">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
									What is the KIRTI?
								</button>
							</h2>
							<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
								<div class="accordion-body">KIRTI is an Organizations of SMK N1 Gombong which
									was inaugurated on February 11, 2011. As name implies,
									KIRTI ing engaded in the field of Information Technology(IT).</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="flush-headingTwo">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
									What are the activities at KIRTI?
								</button>
							</h2>
							<div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
								<div class="accordion-body">There are 3 fields at KIRTI, namely Programming, Networking and Community Activities</div>
							</div>
						</div>
					</div>
				</div>

				<div class="container">
					<hr/>
                    <h1 class="text-center"><b class="line-title">Ber</b>ita</h1>
					<BeritaCom/>
				</div>
			</Layout>
		</>
	)
}
export default HomePage;