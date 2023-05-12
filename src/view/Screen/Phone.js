import { Container, Row, Col, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Style.css'

import { Banner2,Phone } from "../Data/Data";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function phone() {
  return (

    <Container fluid className="bg-dark" >
     

      <Row>
        <Col >
          <Carousel>
            {
              Banner2.map(function (d) {
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
          Phone.map(function (d) {
            return (
              <Col >
                <Card className="launched2">
                  <Card.Img variant="top" src={d.img} />
                  <Card.Body>
                    <Card.Title>{d.Name}</Card.Title>
                    <Card.Text>
                      {d.Price}
                    </Card.Text>
                    <Button variant="primary" href="/Buynow">Buy Now</Button>
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