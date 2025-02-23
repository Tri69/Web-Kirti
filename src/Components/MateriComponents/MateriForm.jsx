import LayoutMateri from "./LayoutMateri";
import {Link} from 'react-router-dom'
const RenderMateri = (props)=> {
    return(
    <>
    <LayoutMateri>
       <div class="container-body1">
        <div class="section1">
            <label>Learn HTML Dasar &gt;</label>
            <h1>Form Input Action</h1>
            <div>
                <p>Jika kita ingin mengambil data dari user, maka kita memerlukan sebuah element yaitu form input. form Input adalah sebuah tag/komponen dalam HTML yang digunakan untuk membuat Input Data. Form input juga dapat digunakan untuk membuat halaman Login, Register, Polling, Survey, konsesus dan lainnya.</p>
            </div>
            <div class="section-card1">
                <h3>Mengapa Anda Belajar Form Input :</h3>
                <ul>
                    <li>Anda dapat mengambil data dari user</li>
                    <li>Anda dapat membuat form user</li>
                    <li>Anda dapat post/get data </li>
                    <li>Anda dapat post data dengan Secure</li>
                </ul>
            </div><br/>
            <div>
                <p>Untuk membuat element/komponent form anda dapat menggunakan tag <i>&lt;form&gt;&lt/form&gt;</i> , dan didalamnya ditambahkan tag <i>&lt;input/&gt;.</i></p>
                <label>Contoh Kode:</label>
                <div class="card-code1">
                    <pre>
                        <code class="blok-code1">
         &lt;html lang="id" &gt;<br/>
        &lt;head&gt;<br/>
        &lt;/head&gt;<br/>
        &lt;body&gt;<br/>
            &lt;form method="get/post" action=""&gt;<br/>
                &lt;!-- Element Input di sini --&gt;<br/>
            &lt;/form&gt;<br/>
        &lt;/body&gt;<br/>
    &lt;/html&gt;
                        </code>
                    </pre>
                </div>
                <div>
                   <h3>Method Action</h3>
                    <ul>
                       <li>Method Get adalah method yang digunakan untuk mengambil/mendapatkan data dari server.</li>
                        <li>Method Post adalah method yang digunakan untuk post/kirim data ke server.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="button">
           <Link > <button>&lt;Prev Go</button></Link>
            <Link to={props.BaseUrl}><button>Lets Go&gt;</button></Link>
            
        </div>
    </div> 
    </LayoutMateri> 
    </>
    )
}
export default RenderMateri;