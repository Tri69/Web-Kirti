import { useEffect, useState } from "react";

const CompKordinator = () => {
    const [data, setData] = useState([]);
    const FetchApi = async ()=> {
        const datas = await fetch("./DataKordinator.json");
        const result = await datas.json();
        setData(result)
    }
    useEffect(()=> {
        FetchApi()
    }, [])

    return (
        <>
             <div class="row">
                {data.map((datass, i) => (
                    <div class="col-lg-4" key={datass.id}>
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                        <h2 class="fw-normal">{datas.nama}</h2>
                        <p>{datass.devisi}</p>
                        <p><a class="btn btn-secondary" href="">View details &raquo;</a></p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default CompKordinator;