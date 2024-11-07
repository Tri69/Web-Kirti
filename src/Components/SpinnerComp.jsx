import Spinner from 'react-bootstrap/Spinner';
import {useState} from 'react';

function SpinnerComp() {
const [status, setStatus] = useState('border');
setTimeout(function() {
    setStatus("none")
}, 5000)
  return <Spinner animation={status} />;
}

export default SpinnerComp;