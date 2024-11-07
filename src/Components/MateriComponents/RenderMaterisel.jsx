const RenderMaterisel = ()=> {
    return(
        <>
            
    <div class="container-body1">
        <div class="section1">
            <label>Learn HTML Dasar &gt;</label>
            <h1>Form Select Action</h1>
            <div>
                <p>Jika kita ingin mengambil data dari user, maka kita memerlukan sebuah element yaitu form input. form Input adalah sebuah tag/komponen dalam HTML yang digunakan untuk membuat Input Data. Form input juga dapat digunakan untuk membuat halaman Login, Register, Polling, Survey, konsesus dan lainnya.</p>
            </div>
            <div class="section-card1">
                <h3>Mengapa Anda Belajar Form Select :</h3>
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
    &lt;html lang="id" &gt;
        &lt;head&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;form method="get/post" action=""&gt;
                &lt;select&gt;
                    &lt;option&gt; Element 1 &lt;/option&gt;
                    &lt;option&gt; Element 2 &lt;/option&gt;
                    &lt;option&gt; Element 3 &lt;/option&gt;
                &lt;/select&gt;
            &lt;/form&gt;
        &lt;/body&gt;
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
                <div class="card-code1">
                    <pre>
                        <code class="blok-code1">
    &lt;html lang="id" &gt;
        &lt;head&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;form method="get/post" action=""&gt;
                &lt;select&gt;
                    &lt;optgroup&gt; 
                        &lt;option&gt; Element 1 &lt;/option&gt;
                        &lt;option&gt; Element 2 &lt;/option&gt;
                        &lt;option&gt; Element 3 &lt;/option&gt;
                    &lt;/optgroup&gt;
                &lt;/select&gt;
            &lt;/form&gt;
        &lt;/body&gt;
    &lt;/html&gt;
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div class="button">
            <button>&gt;Prev Go</button>
            <button>&lt;Lets Go</button>
            
        </div>
    </div>

        </>
    )
}
export default RenderMaterisel;