import { useState } from 'react';
import Layout from '../Components/Layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';
import {useNavigate} from 'react-router-dom'
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [token, setToken] = useState('')
	const Navigate = useNavigate()
	const URL_API = 'https://api-server-five-beta.vercel.app/api/v2/auth/login'
    const HandleSubmit = () => {
        seData(email, password);
		 console.log(token)
		 localStorage.setItem('token', token)
    }
    async function seData(emaill, passwordd){
       const fetchApi = await fetch(URL_API, {
		   method : "POST",
		   headers : {
			   'Content-Type' : 'application/json'
		   },
		   body : JSON.stringify({
			   email : emaill,
			   password : passwordd
		   })
	   })
	   const result = await fetchApi.json()
	   setToken(result.token);
	   localStorage.setItem('token', result.token)
	   if(result.statusCode == 200) {
	   alert("Berhasil Masuk");
		return  setTimeout(()=> {
		   Navigate('/app/dashboard')
	   }, 1500)
	   }
	 
    }
    return (
        <>
            <Layout title="LOGIN PAGE || KIRTI STEMSAGO">
                <Container><br/><br/><br/>
                   
                    <Form className="container-auth"> <h1 className="text-center">
                        LOGIN
                    </h1><hr/>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>
                               Email  Address
                            </Form.Label>
                            <Form.Control
                                type="email"
                                required
                                placeholder="Masukkan Email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Form.Group><br/>
			    <center>
                        <Button 
                            variant="primary"
			    className="button-auth"
                            onClick={ HandleSubmit}>
                            Submit
                        </Button></center><br/>
                        <p className="text-center">Belum Punya Akun? <a href="/app/register">Register</a></p>
                    </Form>
                </Container>
            </Layout>
        </>
    )
}
export default LoginPage;
