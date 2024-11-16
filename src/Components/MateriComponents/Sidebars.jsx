import {useState, useRef} from 'react'
//import '../../App.css';

import { Link } from 'react-router-dom';
const Sidebars = ()=> {
   
    const data = useRef(0);

    return(
        <>
        
         <aside>
        <div class="container-side1">
             
            <ul class="side-ul">
                <li>
                    <h2 class="title-navbar">Materi HTML Dasar</h2>
                </li>
                
                <li>
                    <label>FROM ACTION</label>
                    <ul className='form-ul1'>
                        <summary>
                        <Link to={"/materi/html/form"}> <li >From Input</li></Link>
                        <Link to={"/materi/html/form-input"}> <li >Input Type</li></Link>
                        <Link to={"/materi/html/form-select"}><li >Select Type</li></Link>
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
        
    </div>
        </>
    )
}
export default Sidebars;