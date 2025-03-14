import Layout from '../Components/Layout';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
const FormSaranPage = ()=> {
	const [name, setName] = useState('');
	const [devisi, setDevisi] = useState('');
	const [kritik, setKritik] = useState('')
	const [saran, setSaran] = useState('')
	const [pengalaman, setPengalaman] = useState('')
	const [tambahbidang, setTambahbidang] = useState('');
	
	const navigate = useNavigate();
	const [massageError, setMassageError] = useState('Massukan Data');
	const ENDPOINT = 'https://api-server-five-beta.vercel.app/api/v2/app/postSaran'
	const PostSaran = async ()=> {
		const postData = await fetch(ENDPOINT,
		{
			method : "POST",
			headers:{
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				name : name,
				devisi: devisi,
				kritik : kritik,
				saran : saran,
				pengalaman : pengalaman,
				tambahbidang : tambahbidang
			})
		});
		const result = await postData.json();
		console.log(result);
	}
	const SubmitForm = ()=> {
		
		if(!name || !devisi|| !kritik || !saran || !pengalaman){
			setMassageError("Masukkan Data dengan benar!");
			
			return massageError;
		}
		PostSaran();
		navigate('app/redirect')
		//console.log(name + devisi + kritik + saran + pengalaman + tambahbidang)
	}
	
	return(
		<>
		<Layout>
		<main class="main"><br/>
			<div class="container-absensi">
			<div class="box-title">
				<h1>Form Kritik Dan Saran KIRTI STEMSAGO</h1>
				
				<p>Survey KIRTI STEMSAGO Tahun 2024 / 2025</p><hr/>
				<text>Isilah form Berikut!.</text>
			</div>
			
				<div class="box-absensi">
					<p class="text-absensi">Nama Lengkap :</p><br/>
					<input type="text" 
						class="input-absensi" 
						onChange={(e) => setName(e.target.value)}
						placeholder="Muhammad Ismail"/>
				</div>
				<div class="box-absensi">
					<p class="text-absensi">Bidang Extra :</p><br/>
					<input type="checkbox"
						value="programming"
						onChange={(e)=> setDevisi(e.target.value)}/>
						<text>Programming</text><br/>
					<input type="checkbox" 
						value="networking"
						onChange={(e)=> setDevisi(e.target.value)}/>
						<text>Networking</text>
				</div>
				<div class="box-absensi">
					<p class="text-absensi">Kritik:</p><br/>
					<input type="text" 
						class="input-absensi"
						onChange={(e) => setKritik(e.target.value)}/>
				</div>
				<div class="box-absensi">
					<p class="text-absensi">Saran:</p><br/>
					<input type="text" 
						class="input-absensi"
						onChange={(e)=> setSaran(e.target.value)}/>
					
				</div>
				<div class="box-absensi">
					<p class="text-absensi">Pengalaman:</p><br/>
					<input type="checkbox" 
						value="Sangat Baik"
						onChange={(e) => setPengalaman(e.target.value)}/><text>Sangat Baik</text><br/>
					<input type="checkbox" 
						value="Baik"
						onChange={(e) => setPengalaman(e.target.value)}/><text>Baik</text><br/>
					<input type="checkbox" 
						value="Kurang"
						onChange={(e) => setPengalaman(e.target.value)}/><text>Kurang</text><br/>
			
				</div><div class="box-absensi">
					<p class="text-absensi">Tambah Bidang :</p><br/>
					<input type="text" 
						class="input-absensi" 
						onChange={(e) => setTambahbidang(e.target.value)}/>
					
				</div>
				<div class="box-absensi">
				<center>
				<div class="alert alert-danger" role="aler">
				{massageError}
				</div>
<button class="button-absensi" onClick={SubmitForm}>Kirim</button></center>
				</div>
			
		</div><br/>
		</main>
		</Layout>
		</>
	)
}
export default FormSaranPage
