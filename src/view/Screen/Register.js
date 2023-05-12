import {Container,Col,Row,Form,Button} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register(){
  const nav=useNavigate();
   const [file, setFile] = useState("");
   const [fileName, setFileName] = useState("");
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    let submitregister=async()=>{
      console.log(file);
      console.log(fileName);
      
        const formdata= new FormData();
        formdata.append("file",file)
        formdata.append("filename",fileName)
        let data =JSON.stringify( Object.fromEntries(formdata));
      
      console.log(data);
        let params={
        username:name,
        email:email,
        password:password,
        image:file
      }
      console.log(params);
      try {
          let res =await axios.post("register",params).catch(err=>alert(err))
          console.log(res.data);
          let {success,message} =res.data
          if(success){
            alert(message)
            nav("/Login")
          }
          else{
            alert(message)
          }
        } catch (error) {
          console.log("error==",error);
          alert(error)
        }
      
      setEmail("")
      setPassword("")
      setName("")
      }
    return(
        <>
        <Container className="bg-dark" fluid>
            <Row>
            <Col>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Name</Form.Label>
        <Form.Control type="Name" placeholder="Enter Name" value={name} onChange={(d)=>setName(d.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(d)=>setEmail(d.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-muted">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(d)=>setPassword(d.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={submitregister}>
        Register
      </Button>
    </Form>
            </Col>
            </Row>
        </Container>
        </>
    );
}
