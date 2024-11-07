const RenderMateriin = ()=> {
    
    return(
        <>
            <div class="container-body1">
        <div class="section1">
            <label>Learn HTML Dasar &gt;</label>
            <h1>Tag Input Action</h1>
            <div>
                <p>Tag Input adalah sebuah tag/komponen dalam HTML yang digunakan untuk membuat Input Data. Dalam Tag Input juga terdapat beberapa type di antaranya Text, number, e-mail, password dan lainyya..</p>
            </div>
            <div class="section-card1">
                <h3>Mengapa Anda Belajar  Input :</h3>
                <ul>
                    <li>Anda dapat mengambil data dari user</li>
                    <li>Anda dapat membuat form user</li>
                    <li>Anda dapat post/get data </li>
                    <li>Anda dapat post data dengan Secure</li>
                </ul>
            </div><br/>
            <div>
                <p>Untuk membuat element/komponent form anda dapat menggunakan tag  <i>&lt;input/&gt;.</i></p>
                <label>Contoh Kode:</label>
                <div class="card-code1">
                    <pre>
                        <code class="blok-code1">
    &lt;html lang="id" &gt;<br/>
        &lt;head&gt;<br/>
        &lt;/head&gt;<br/>
        &lt;body&gt;<br/>
            &lt;form method="get/post" action=""&gt;<br/>
                &lt;input type="text" placeholder="text only"/&gt;<br/>
                &lt;input type="number" value="123"/&gt;<br/>
                &lt;input type="password"/&gt;<br/>
                &lt;input type="email"/&gt;<br/>
                &lt;input type="date"/&gt;<br/>
                &lt;input type="radio"/&gt;<br/>
                &lt;input type="checkbox"/&gt;<br/>
            &lt;/form&gt;<br/>
        &lt;/body&gt;<br/>
    &lt;/html&gt;
                        </code>
                    </pre>
                </div>
                <div >
                   <h3>Render Code : </h3>
                    <div class="card-code1">
                   
                        <input type="text" placeholder="text only"/><br/>
                        <input type="number" value="123"/><br/>
                        <input type="password" value=""/><br/>
                         <input type="email" value="123"/><br/>
                         <input type="date" value="123"/><br/>
                         <input type="radio" value="123"/><br/>
                         <input type="checkbox" value="123"/>
                   </div>
                </div>
                
                <div>
                    <p>Di atas merupakan Tag untuk input dan beberapa tipe yan digunakan untuk form.</p>
                </div>
            </div>
        </div>
        <div class="button">
            <button>&gt;Prev Go</button>
            <button>&lt;Lets Go</button>
            
        </div>
         <button class="b">Klik Nac</button>
    </div>

        </>
    )
}
export default RenderMateriin;