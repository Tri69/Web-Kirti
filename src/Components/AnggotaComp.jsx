import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

const AnggotaComp = ()=> {
    const [dataSiswa, setDataSiswa] = useState([]);
    const [dataSearch, setDataSearch] = useState('')
    
    
    const FetchData = async () => {
        const dataapi = await fetch(`https://api-server-five-beta.vercel.app/api/v2/`);
        const result = await dataapi.json();
        setDataSiswa(result);
    }
    const FetchDataSearch = async ()=> {
        const api = await fetch(`https://api-server-five-beta.vercel.app/api/v2/`+dataSearch)
        const re = await api.json()
        setDataSiswa(re)
    }
    
    useEffect(()=>{
        if(dataSearch.length < 1){
            FetchData()
        }else{
            FetchDataSearch()
        }
    }, [])
    const CariData = (e)=> {
        let KeyWord = e.target.value;
        setDataSearch(KeyWord);
    }
    console.log(dataSearch.length)
    
    return(
        <>
        <Container>
            <div>
                <Form.Control 
                    type="text" 
                    placeholder="name@example.com" 
                    onChange={CariData} />
            </div><br/>
            <Table responsive  variant="light">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>ClassName</th>
          <th>NIS</th>
            <th>Bidang</th>
            <th>Info</th>
        </tr>
      </thead>
      <tbody>
          {dataSiswa.map((datas)=> (
          
          
        <tr key={datas.id+1}>
          <td>{datas.id}</td>
          <td>{datas.name}</td>
          <td>{datas.class}</td>
          <td>{datas.nis}</td>
        <td>Programming</td>
                  <td><a href="">View Detail</a></td>
        </tr>
             ))}
     </tbody>
        </Table>
        </Container>
        </>
    )
}
export default AnggotaComp;