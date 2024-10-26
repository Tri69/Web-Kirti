import { useEffect, useState } from "react";
import CompKordinator from "./CompKordinator";
import CompStructure from "./CompStructure";
import CompAlumni from "./CompAlumni";
import CompAnggota from './CompAnggota';

const rennderProfil = (NumberStructure)=> {
    switch(NumberStructure) {
        case "1": {
            return <CompStructure/>
        }case "2": {
           return <CompKordinator/>
        }case "3": {
            return <CompAlumni/>
        }default:{
            return <CompStructure/>
        }
    }
}

const CompProfilHome = () => {
    const [numbernav, setNumbernav] = useState("1");
    let Structure =()=> {
        return setNumbernav("1")
    }
    let Coordinator = ()=> {
        return setNumbernav("2")
    }
    let Alumni =()=> {
        return setNumbernav("3")
    }
    return (
        <>
            <center>
                <h1>Our Contributor</h1><hr /> 
                <div>
                <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" >
                        <li class="nav-item" role="presentation">
                            <button onClick={Structure} class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Structure</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button onClick={ Coordinator} class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Coordination</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button onClick={ Alumni } class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Alumni</button>
                        </li>
                    </ul>
                </div><br/>
                {rennderProfil(numbernav)}
            </center>
        </>
    )
}
export default CompProfilHome;