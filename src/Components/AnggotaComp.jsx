import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const IndexSearch = (props)=>{
    const [dataSiswaSearch, setDataSiswaSearch] = useState([]);
    const FetchDataSearch = async ()=> {
        const apis = await fetch(`https://api-server-five-beta.vercel.app/api/v2/${props.KeyWord}`)
        const res = await apis.json()
        setDataSiswaSearch(res)
    }
    useEffect(()=> {
        FetchDataSearch()
    }, [])
    return(
        <>
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
          {dataSiswaSearch.map((datas)=> (  
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
        
        </>
    )
}
const Index = ()=>{
     const [dataSiswa, setDataSiswa] = useState([]);
    
     const FetchData = async () => {
        const dataapi = await fetch(`https://api-server-five-beta.vercel.app/api/v2/`);
        const result = await dataapi.json();
        setDataSiswa(result);
    }
    useEffect(()=>{
        FetchData()
    }, [])
    return(
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
        
        )
}
const AnggotaComp = ()=> {
   
    //const [secSearch, setSecSearch] = useState([])
    const [dataSearch, setDataSearch] = useState('')
   
    const TrueAndFalse = ()=> {
   
       if(dataSearch.length <= 0) {
           return <Index/>;
     } else if(dataSearch.length > 0) {
         return <IndexSearch KeyWord={dataSearch}/>;
      }
    
 }
    
    function CariData(e) {
        let KeyWord = e.target.value;
        setDataSearch(KeyWord);
    }
    //console.log(dataSiswa)
    
    return(
        <>
        <Container>
            <div>
                <Form.Control 
                    type="text" 
                    placeholder="name@example.com" 
                    onKeyUp={CariData} />
                <button>Search</button>
            </div><br/>
            
            {TrueAndFalse()}
        </Container>
        </>
    )
}
export default AnggotaComp;