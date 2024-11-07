import {useState} from 'react'
//import '../../App.css';
import RenderMateri from './RenderMateri';
import RenderMateriin from './RenderMateriin';
import RenderMaterisel from './RenderMaterisel'
const Sibebars = ()=> {
    const [pageNumber, setPageNumber] = useState("2");
    console.log(pageNumber);
    const RenderPage = ()=> {
        if(pageNumber == "2"){
            return <RenderMateri/>
        }else if(pageNumber == "3"){
            return <RenderMateriin/>
        }else if(pageNumber == "4") {
            return <RenderMaterisel/>
        }else {
            return <RendeMateriin/>
        }
    }
    return(
        <>
        
         <aside>
        <div class="container-side1">
             
            <ul class="side-ul">
                <li>
                    <h2 class="title-navbar">Materi HTML Dasar</h2>
                </li>
                
                <li>
                    <label onClick={() => setPageNumber("2")}>FROM ACTION</label>
                    <ul>
                        <summary>
                        <li onClick={() => setPageNumber("3")}>Input Type</li>
                        <li onClick={() => setPageNumber("4")}>Select Type</li>
                        <li onClick={() => setPageNumber("2")}>Layout</li>
                        </summary>
                    </ul>
                </li>
                <li>
                    <label>FROM ACTION</label>
                    <ul>
                        <summary>
                        <li>Input Type</li>
                        <li>Select Type</li>
                        <li>Form Action</li>
                        <li>Layout</li>
                        </summary>
                    </ul>
                </li>
                <li>
                    <label>FROM ACTION</label>
                    <ul>
                        <summary>
                        <li>Input Type</li>
                        <li>Select Type</li>
                        <li>Form Action</li>
                        <li>Layout</li>
                        </summary>
                    </ul>
                </li>
                <li>
                    <h3>Hak Cipta Dilindungi oleh Undang-Undang</h3>
                  
                </li>
            </ul>
        </div>
    </aside>
    <div>
        <RenderPage/>
    </div>
        </>
    )
}
export default Sibebars;