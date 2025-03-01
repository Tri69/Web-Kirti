import { useState, useEffect } from "react";
import kirti from '../../assets/kirti_stemsago.png'
const CompStructure = () => {
    const [data, setData] = useState([])
    const FecthApiData = async () => {
        const datares = await fetch('./DataProfil.json');
        const resultres = await datares.json();
        setData(resultres);
    }
    useEffect(() => {
        FecthApiData()
    }, []);
    
    return (
        <>
            <div class="row">
                {data.map((datas, i) => (
                    <div class="col-lg-4" key={datas.id}>
                        <img src={kirti} class="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <h2 class="fw-normal">{datas.nama}</h2>
                        <p>{datas.devisi}</p>
                        <p><a class="btn btn-secondary" href="">View details &raquo;</a></p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CompStructure;