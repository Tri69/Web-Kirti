import { useEffect, useState } from "react";
import CompKordinator from "./CompKordinator";
import CompStructure from "./CompStructure";
import CompAlumni from "./CompAlumni";
import CompAnggota from './CompAnggota';


const CompProfilHome = () => {
    const [numbernav, setNumbernav] = useState("1");
    const leg = () => {
        if(numbernav == "1"){
            return <CompStructure />
        }else if(numbernav == "2") {
           return <CompKordinator/>
        }else {
            return <CompAlumni/>
        } 
    }
    useEffect(()=> {
        leg()
    }, leg)
    return (
        <>
            <center>
                <h1>Our Contributor</h1><hr /> 
                <div>
                <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" >
                        <li class="nav-item" role="presentation">
                            <button onClick={()=> Structure(setNumbernav("1"))} class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Structure</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button onClick={()=> Coordinator(setNumbernav("2"))} class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Coordination</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button onClick={()=> Alumni(setNumbernav("3")) } class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Alumni</button>
                        </li>
                    </ul>
                </div><br/>
               {leg()}
            </center>
        </>
    )
}
export default CompProfilHome;