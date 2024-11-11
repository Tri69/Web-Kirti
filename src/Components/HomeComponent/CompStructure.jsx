import { useState, useEffect } from "react";

const CompStructure = () => {
    const [data, setData] = useState([])
    const FecthApiData = async () => {
        const datares = await fetch('./DataProfil.json');
        const resultres = await datares.json();
        setData(resultres);
    }
    useEffect(() => {
        FecthApiData()
    }, [])
    return (
        <>
            <div class="container">
            <div class="row">
                {data.map((datas, i) => (
                    <div class="col-lg-4" key={datas.id}>
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                        <h2 class="fw-normal">{datas.nama}</h2>
                        <p>{datas.devisi}</p>
                        <p><a class="btn btn-secondary" href="">View details &raquo;</a></p>
                    </div>
                ))}
            </div></div>
        </>
    )
}

export default CompStructure;
