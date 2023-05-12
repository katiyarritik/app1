import { Container,Col,Row,Form,Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Buynow(){
    const nav=useNavigate();
    const[file, setFile] = useState("");
    const[fileName, setFileName] = useState("");
    const[digit1,setDigit1] = useState('');
    const[digit2,setDigit2] = useState('');
    const[digit3,setDigit3] = useState('');
    const[Name,setName] = useState('');
    const  [formValues, setFormValues]=useState('')


    let pay=async()=>{
      console.log(file);
      console.log(fileName);
      
        const formdata= new FormData();
        formdata.append("file",file)
        formdata.append("filename",fileName)
        let data =JSON.stringify( Object.fromEntries(formdata));
      
      console.log(data);
        let params={
        name:Name,
        amount:digit1,
        cardnumber:digit2,
        pin:digit3
      }
      console.log(params);
      try {
          let res =await axios.post("payment",params).catch(err=>alert(err))
          console.log(res.data);
          let {success,message} =res.data
          if(success){
            alert(message)
            nav("/Home")
          }
          else{
            alert(message)
          }
        } catch (error) {
          console.log("error==",error);
          alert(error)
        }
      
      setDigit1("")
      setDigit2("")
      setDigit3("")
      setName("")
    }
  


    return(
        <Container className="bg-dark" fluid>
            <Row><h1>Make Payment</h1></Row>
            <Row>
                <Col>
                <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Name on card</Form.Label>
        <Form.Control type="Name"  placeholder="Enter Name" value={Name} onChange={(d)=>setName(d.target.value)}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-muted">Enter Amount</Form.Label>
        <Form.Control type="Name" minLength={5} maxLength={5} placeholder="Enter Amount" value={digit1} onChange={(d)=>setDigit1(d.target.value)}/>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Enter 16 Digit Number</Form.Label>
        <Form.Control type="Name" minLength={16} maxLength={16} placeholder="Enter Card Number" value={digit2} onChange={(d)=>setDigit2(d.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your Card details with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Enter PIN</Form.Label>
        <Form.Control type="Name" minLength={3} maxLength={3} placeholder="Enter PIN" value={digit3} onChange={(d)=>setDigit3(d.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your Card details with anyone else.
        </Form.Text>
      </Form.Group>

    
      
      <Button variant="primary" onClick={pay}> Pay </Button>
    </Form>
                </Col>
            </Row>
        </Container>
    )

}