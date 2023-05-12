import { Container, Col, Row, NavLink } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs"
import { FiFacebook } from "react-icons/fi"
import { BsTwitter } from "react-icons/bs"
import { ImWhatsapp } from "react-icons/im"
import React from 'react';
import '../Style/Style.css'




export default function Contactus() {

   
      
   
    return (
        <Container fluid>
            <Container>
              <Row>
              <h1>Get in touch with us on:</h1>
              <hr className="hr"></hr>
                <Col className="contactus">
               
                           <Col> <a href="https://www.instagram.com/" ><BsInstagram size={40} color="black" /></a></Col>

                           <Col><a href="https://www.twitter.com/"> <BsTwitter size={40} color="black" /></a></Col>

                           <Col><a href="https://www.whatsapp.com/"><ImWhatsapp size={40} color="black" /></a></Col>

                           <Col><a href="https://www.facebook.com/"><FiFacebook size={40} color="black" /></a></Col>
                         
                         </Col>
                         </Row>
            </Container>

            <hr className="hr"></hr>
            <Container>
                <Row><p><span style={{ fontWeight: 'bold' }}>Gmail:</span>info@gmail.com</p></Row>
                <Row> <p><span style={{ fontWeight: 'bold' }}>Phone no. :</span>+ 91 234 567 88</p></Row>
                <Row><p><span style={{ fontWeight: 'bold' }}>Address:</span> Jaipur, Rajasthan, 254749</p></Row>
                <hr className="hr"></hr>
            </Container>

            <Container>
                <Row>
                    
  
                </Row>
            </Container>
        </Container>
    )
}
