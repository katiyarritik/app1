import { Container, Row, Col, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscWorkspaceTrusted } from "react-icons/vsc"
import { MdReplay10 } from "react-icons/md"
import { IoIosDocument } from "react-icons/io"
import { FaShippingFast } from "react-icons/fa"
import {  Banner1,  image1, image2, image3, newlaunched } from "../Data/Data";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { textimg } from "../Data/Data";
import Buynow from "./Buynow";
import '../Style/Style.css'



export default function Home() {
    return (

        <Container fluid className="bg-dark">


            <Row>
                <Col>
                    <Carousel>
                        {
                            Banner1.map(function (d) {
                                return (


                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={d}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>


                                )
                            })
                        }
                    </Carousel>
                </Col>
            </Row>
            <hr className="hr"></hr>

            <Container fluid  >
                <Row className="homewarranty" >


                    <Col >
                        <VscWorkspaceTrusted size={100} color="white" />
                        <Row>
                            <h3 >1 year warranty</h3>
                        </Row>
                    </Col >
                    <Col >
                        <MdReplay10 size={100} color="white" />
                        <Row>
                            <h3 >7 Day Replacement</h3>
                        </Row>
                    </Col>
                    <Col  >
                        <FaShippingFast size={100} color="white" />
                        <Row>
                            <h3>Free Shipping</h3>
                        </Row>
                    </Col>
                    <Col >
                        <IoIosDocument size={100} color="white"  />
                        <Row>
                            <h3 >GST Billing</h3>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <hr className="hr" ></hr>
            <Container fluid  className="launched">
                <Row>
                    <Col >
                        <h2 className="launched1">New Launched</h2>
                    </Col>
                </Row>
                <Row>
                    {
                        newlaunched.map(function (d) {
                            return (
                                <Col >
                                    <Card className="launched">
                                        <Card.Img variant="top" src={d.img} />
                                        <Card.Body>
                                            <Card.Title>{d.Name}</Card.Title>
                                            <Card.Text>
                                                {d.Price}
                                            </Card.Text>
                                            <div >
                                            <Button  variant="primary" href="/Buynow">Buy Now</Button>
                                            <Button variant="primary" className="button" href="#">Add to Cart</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                        )
                    }
                </Row>
            </Container>
            <hr className="hr"></hr>
            <Container fluid>
                <Row>
                    <Col  className="homewarranty">
                        {
                            image1.map(function (d) {
                                return (
                                    <Card className="launched" >
                                        <Card.Img src={d.img} height={450} />
                                        <Card.ImgOverlay  >
                                            <Card.Title  >{d.title}</Card.Title>
                                            <Button variant="secondary" href="/SmartWatch" >Buy Now</Button>
                                        </Card.ImgOverlay>
                                    </Card>

                                )
                            })
                        }

                    </Col>
                    <Row>
                        <Col className="homewarranty">
                            {
                                image2.map(function (d) {
                                    return (
                                        <Card className="launched"  >
                                            <Card.Img src={d.img}  />
                                            <Card.ImgOverlay  >
                                                <Card.Title  >{d.title}</Card.Title>
                                                <Button variant="secondary" href="/Laptops" >Buy Now</Button>
                                            </Card.ImgOverlay>
                                        </Card>

                                    )
                                })
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col className="homewarranty">
                            {
                                image3.map(function (d) {
                                    return (
                                        <Card className="launched" >
                                            <Card.Img src={d.img}   />
                                            <Card.ImgOverlay  >
                                                <Card.Title  >{d.title}</Card.Title>
                                                <Button variant="secondary" href="/Phone" >Buy Now</Button>
                                            </Card.ImgOverlay>
                                        </Card>

                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Row>
            </Container>
            <hr className="hr"></hr>
            <Container fluid>
                <Row>
                    {

                        textimg.map(function (d) {
                            return (<Col  className="homewarranty">
                                <>
                                    <h1 >{d.text}</h1>
                                    <h4>{d.name}</h4>
                                    <img src={d.img} className="textimg"/>
                                </>
                            </Col>)
                        })

                    }

                </Row>
            </Container>

        </Container>

    )
}