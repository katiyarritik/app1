import { BrowserRouter, Routes, Route} from "react-router-dom";
import { BsSmartwatch } from "react-icons/bs"

import Home from "./view/Screen/Home";
import Register from "./view/Screen/Register";
import Aboutus from "./view/Screen/Aboutus";
import Laptops from "./view/Screen/Laptops";
import Phone from "./view/Screen/Phone";



import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Login from "./view/Screen/Login";
import { useState } from "react";
import SmartWatch from "./view/Screen/SmartWatch";
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Contactus from "./view/Screen/Contactus";
import Buynow from "./view/Screen/Buynow";







export default function App() {
const[user,setUser]=useState(localStorage.getItem('user'))

  function logout(){
    alert('logout')
    localStorage.clear()
    window.location.reload();
  }
 
  return (

    <BrowserRouter>
    
      <Container fluid className="bg-dark">
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container >
                <Navbar.Brand><BsSmartwatch size={120} /><span style={{ fontSize: '40px', marginLeft: '10px' }}>Digi Shop</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">


                
                    <Nav className="me-auto">
                      { !user?<>
                   
                          <Nav.Link href="/Login"><span style={{ fontSize: '25px' }}>Login</span></Nav.Link>
                          <Nav.Link href="/Register"><span style={{ fontSize: '25px' }}>Register</span></Nav.Link>
                          </>:null
                        }
                       <Nav.Link href="/"><span style={{ fontSize: '25px' }}>Home</span></Nav.Link>
                       <Nav.Link href="/Addtocart"><span style={{ fontSize: '25px' }}>Cart</span></Nav.Link>
                    <NavDropdown title="More" style={{ fontSize: '25px' }} id="collasible-nav-dropdown">
                      <NavDropdown.Item href="/SmartWatch">Smart Watch</NavDropdown.Item>

                      <NavDropdown.Item href="/Laptops">Laptop</NavDropdown.Item>
                      <NavDropdown.Item href="/Phone">Phones</NavDropdown.Item>
                      <NavDropdown.Divider />
                    </NavDropdown>
                  </Nav>


                  <Nav>
                    <Nav.Link href="/Contactus"><span style={{ fontSize: '25px' }}>Contact Us</span></Nav.Link>
                    <Nav.Link eventKey={2} href="/Aboutus" >
                      <span style={{ fontSize: '25px' }}> About Us</span>
                    </Nav.Link>
                    {
                     user!==null? <Nav.Link eventKey={2} href="#" >
                      <span style={{ fontSize: '25px' }} onClick={logout}> Logout</span>
                    </Nav.Link>:null
                    
                    }


                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
      

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/SmartWatch' element={<SmartWatch/>} />
        <Route path='/Phone' element={<Phone/>} />
        <Route path='/Laptops' element={<Laptops/>} />
        <Route path='/Contactus' element={<Contactus/>} />
        <Route path='/Buynow' element={<Buynow/>} />
      
       
        
      </Routes>
      
      <Container fluid className="bg-dark" >
        <Row >
          <Col >
          <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
     <hr></hr>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol  className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <BsSmartwatch size={25}  />
                   DigiShop
              </h6>
              <p>
                Here you can buy smartwatches,phones and laptop to organize your Daily routine work.which will help you to enhance your personality and makes you confident in your daily works. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/SmartWatch' className='text-reset text-decoration-none'>
                  Smart Watch
                </a>
              </p>
              <p>
                <a href='/Laptops' className='text-reset text-decoration-none'>
                  Laptop
                </a>
              </p>
              <p>
                <a href='Phone' className='text-reset text-decoration-none'>
                  Phones
                </a>
              </p>
             
            </MDBCol>

            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Jaipur, Rajasthan, 254749
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3 " />
                info@message.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'black' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold, text-decoration-none ' href='/Home'>
          DigiShop.com
        </a>
      </div>
      </MDBFooter>
 </Col>
        </Row>
      </Container>
    </BrowserRouter>



  )
}




