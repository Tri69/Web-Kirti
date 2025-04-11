import { useState } from "react";
import  Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"
import Layout from "../Components/Layout";
import './auth.css';
import {useNavigate} from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
	const [scc, setScc] = useState('');
    const [devisi, setDevisi] = useState('');

	const Navigate = useNavigate()
    const URL_API = 'https://api-server-five-beta.vercel.app/api/v2/auth/register'
    const FetchApi = async (user, emails, pass, devisi) => {
        const FetchData = await fetch(URL_API, {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username : user,
                email : emails,
                password: pass,
		devisi : devisi
            })
        })
		
        const result = await FetchData.json();
		
		if(result.statusCode == 200){
			alert("Pendaftaran Berhasil")
			setScc("Pendaftaran Berhasil")
			return setTimeout(() => {
				 Navigate('/app/login')
			}, 1500)
		}else {
			alert('Pendaftaran Gagal')
			setErr("Pendaftaran Gagal")
		}
		
    };
	
    function HandleSubmit() {
        if(username.length <= 0 ||email.length <= 0 || password.length <= 0) return setErr('Data Belum Lengkap')
        FetchApi(username, email, password, devisi)
		console.log('yes');
    }
    
    return (
        <>
            <Layout title="REGISTER PAGE || KIRTI STEMSAGO">
                <Container >
                   <br/><br/><br/><br></br>
                    <Form className="container-auth">
                         <h1 className="text-center">
                        REGISTRASI
                    </h1><hr/>
                        <Form.Group className="mb-1" controlId="formBasicUser">
                            <Form.Label>
                                Username
                            </Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Username"
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>
                                Email Address
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
                        </Form.Group>
			    <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>
                                Devisi
                            </Form.Label>
                            <Form.Control
                                type="radio"
                                required name="devisi1"
    
                                label="Programming" value="Programming"
                                onClick={(event) => setDevisi(event.target.value)}
                            /></br>
 <Form.Control
                                type="radio" name="devisi1"
                                required
                                label="Networking" value="Networking"
                                onClick={(event) => setDevisi(event.target.value)}
                            />
                        </Form.Group><br/><br/>
			    <center>
                        <Button
                            variant="primary"
                            className="button-auth"
                            onClick={() => HandleSubmit()}>
                            Submit
                        </Button></center><br/>
                        <p>{scc.length > 5 ? scc : err}</p>
                        <p className="text-center">Sudah Daftar? <a href="/app/login">Login</a></p>
                    </Form>
                </Container>
            </Layout>
        </>
    )
}
export default RegisterPage;
