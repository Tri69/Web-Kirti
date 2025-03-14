import Layout from '../Components/Layout';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const TerimaKasihPage = ()=> {
	const navigate = useNavigate()
	useEffect(()=> {
		setTimeout(()=> {
			navigate('/')
		}, 2000)
	})
	return(
		<>
			<Layout>
			<br/><br/><br/><br/>
				<center>
					<h1>Terima Kasih Telah Mengisi Form</h1>
					<a href="/">Go To Back Home</a>
				</center>
			</Layout>
		</>
	)
}
export default TerimaKasihPage;
