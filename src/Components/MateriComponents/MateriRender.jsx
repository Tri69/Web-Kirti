import {useParams} from 'react-router-dom';
import RenderMateri from './MateriForm';
import MateriInput from './MateriInput';
import MateriSelect from './MateriSelect';
import NotFound from '../../Pages/NotFound';

function GetPageMateri(props) {
    switch(props.KeyUrl){
        case "form" : {
           return <RenderMateri/>
        }
        case "form-input" : {
            return <MateriInput/>;
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