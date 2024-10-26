import Layout from "../../Components/Layout";
import '../../assets/Styles/html.module.css';
import code from '../../assets/PDF/Konfigurasi Code Editor.pdf'
import ReactPDF from '@react-pdf/renderer';
import {PDFViewer} from '@react-pdf/renderer'
import RenderMateri from "./RenderMateri";

const HTMLDasar = () => {
	return(
		<>
			<Layout>
				<br/><br/>
				<main>
					<div>
						<h1 className="text-center">Materi 1.1.1</h1>
						<center>
						<div class="code">
							<PDFViewer>
							{}
							</PDFViewer>
						</div>
						</center>
					</div>
				</main>
			</Layout>
		</>
	)
}

export default HTMLDasar;
