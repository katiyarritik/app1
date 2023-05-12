import { Container, Row, Col, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Style.css'

import { Banner, Cardsdetails } from "../Data/Data";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function SmartWatch() {
  return (

    <Container fluid className="bg-dark">


      <Row>
        <Col >
          <Carousel >
            {
              Banner.map(function (d) {
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

      <Row >


        {
          Cardsdetails.map(function (d) {
            return (
              <Col >
                <Card className="launched2">
                  <Card.Img variant="top" src={d.img} />
                  <Card.Body>
                    <Card.Title>{d.Name}</Card.Title>
                    <Card.Text>
                      {d.Price}
                    </Card.Text>
                    <Button href="/Buynow" variant="primary" >Buy Now</Button>
                    <Button variant="primary" className="button" href="#">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
          )
        }
      </Row>

    </Container>

  )
}