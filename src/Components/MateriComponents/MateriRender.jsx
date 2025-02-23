import {useParams} from 'react-router-dom';
import RenderMateri from './MateriForm';
import MateriInput from './MateriInput';
import MateriSelect from './MateriSelect';
import NotFound from '../../Pages/NotFound';
//import { useState } from 'react';

const BaseUrl = ['/materi/html/form-input', '/materi/html/form-select']
function GetPageMateri(props) {
    switch(props.KeyUrl){
        case "form" : {
           return <RenderMateri BaseUrl={BaseUrl[0]}/>
        }
        case "form-input" : {
            return <MateriInput BaseUrl={BaseUrl[1]}/>;
        }
        case "form-select":{
            return <MateriSelect/>;
        }default:{
            return <NotFound/>;
        }
    }
}

const MateriRender = ()=> {
    const {url} = useParams();
    return(
        <>
            <GetPageMateri KeyUrl={url}/>
            
        </>
    )
}
export default MateriRender;