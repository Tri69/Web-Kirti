import Container from 'react-bootstrap/Container';
import Layout from "../Components/Layout";
import {useState, useEffect} from 'react';
import './auth.css';
import HTMLDasar from '../Pages/Materi/HTMLDasar'
const DashboardPage = ()=> {
	const [profil, setProfil] = useState('')
	const URL_API = 'https://api-server-five-beta.vercel.app/api/v2/app/Dashboard'
	function Logout() {
		localStorage.removeItem('token')
		localStorage.setItem('token', 'logout')
	}
	useEffect(() => {
		const getToken = localStorage.getItem('token')
		console.log(getToken)
		const fetchApi = async () => {
			const fetchdata = await fetch(URL_API, {
				method: "GET",
				headers : {
					'Content-Type' : 'application/json',
					'Authorization' : `Bearer ${getToken}`
				},
			})
			const result = await fetchdata.json();
			setProfil(result.DataProfile)
		}
		fetchApi()
	}, [])
	console.log(profil)
    return(
        <>
		<Layout><br/><br/><br/>
			<Container>
			<center>
			<div className="dashboard-profil">
				
			</div>
			
            <h1>Selamat Datang {profil.username}</h1>
			<h2>Data Profil</h2>
			<div class="table-data">
				<div class="box-data">
					<h3>Username : {profil.username} </h3>
				</div>
				<div class="box-data">
					<h3>Email : {profil.email}</h3>
				</div>
				<div class="box-data">
					<h3>Devisi: Networking </h3>
				</div>
			</div>
			<a href="/app/login" onClick={Logout}>Logout</a>
			</center>
			<div class="course">
				<h2>Course</h2>
				<div class="box-course">
				{<HTMLDasar/>}
				</div>
			</div>
			</Container>
		</Layout>
        </>
    )
}
export default DashboardPage;