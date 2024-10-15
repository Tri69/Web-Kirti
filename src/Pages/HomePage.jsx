import Layout from "../Components/Layout";
import '../App.css';
import kirti_stemsago from '../assets/kirti_stemsago.png'
const HomePage = () => {
	return (
		<>
			<Layout>
				<div className="container-body ">
					<div className="caption-body">
						<br/><br/><br/><br/>
						<h1> Welcome To The KIRTI Website</h1>
						<h3>Information Technology, Programming, Networking and Research <br />
						 Organizations and Extracurriculars. 
						 -SMK N1 Gombong</h3>
						<button type="button" class="btn btn-primary ">Learn More</button>
						<button type="button" class="btn btn-light">Get Started</button>
						<br/><br/><br/><br/>
					</div>
				</div>
				<div className="container">
					<hr/>
					<div>
						<div className="caption-about text-center">
							<h1>About</h1>
							<h4>KIRTI Organizations - SMK N1 Gombong</h4>
						</div>
						<div className="d-flex">
							<div>
								<img src={kirti_stemsago}/>
							</div>
							<div>
								<h2>KIRTI Organizations <b>Technology</b> for Human
									 Beings</h2>
								<p>KIRTI is an Organizations of SMK N1 Gombong which
									was inaugurated on February 11, 2011. As name implies,
									KIRTI ing engaded in the field of Information Technology(IT).
									With the existence of KIRTI, it is expected to provide
									a clear and real contribution to SMK N1 Gombong.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
export default HomePage;