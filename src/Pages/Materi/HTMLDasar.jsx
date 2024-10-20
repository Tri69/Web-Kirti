import Layout from "../../Components/Layout";
import '../../assets/Styles/html.module.css';
import code from '../../assets/PDF/Konfigurasi Code Editor.pdf'
const HTMLDasar = () => {
	return(
		<>
			<Layout>
				<main>
					<div>
						<h1 className="text-center">Materi 1.1.1</h1>
						<center>
						<div class="code">
						<iframe src={code} >

						</iframe></div>
						</center>
					</div>
				</main>
			</Layout>
		</>
	)
}

export default HTMLDasar;
