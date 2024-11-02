import Layout from "../../Components/Layout";
import '../../assets/Styles/html.module.css';
//import code from '../../assets/PDF/Konfigurasi Code Editor.pdf'

import RenderMateri from "./RenderMateri";
import DocViewer from 'react-doc-viewer';

const HTMLDasar = () => {
	const PDFHTML = [
		{
			uri:require('../../assets/PDF/Konfigurasi Code Editor.pdf')
		}
	];
	return(
		<>
			<Layout>
				<br/><br/>
				<main>
					<div>
						<h1 className="text-center">Materi 1.1.1</h1>
						<center>
						<div class="code">
							<DocViewer documents={PDFHTML}/>
						</div>
						</center>
					</div>
				</main>
			</Layout>
		</>
	)
}

export default HTMLDasar;
