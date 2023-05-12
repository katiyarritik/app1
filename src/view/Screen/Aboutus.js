import { Container, Col, Row } from "react-bootstrap"
import { About, img } from "../Data/Data"

export default function Aboutus() {
    return (
        <Container fluid>
            <Row>
                <Col >
                    <p className="aboutus1">About us</p>
                </Col>
            </Row>
            <Row >

                {
                    img.map(function (d) {
                        return (
                            <Col >
                                <img src={d.img2} className="aboutus3"></img>
                            </Col>
                        )
                    })
                }

            </Row>
            <Row>

                {
                    img.map(function (d) {
                        return (
                            <Col>
                                <img src={d.img1} className="aboutus2"></img>
                            </Col>
                        )
                    })
                }

                {
                    About.map(function (d) {

                        return (
                            <Col className="aboutus2">
                                <p >{d}</p>
                            </Col>
                        )
                    })
                }

            </Row>
        </Container>
    )
}