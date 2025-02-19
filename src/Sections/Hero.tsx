import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./hero.css";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <Container className="hero">
      <Row>
        <Col>
          <h2>Hi There,</h2>
          <h2>
            I'm Faisal <span>Zakari</span>{" "}
          </h2>
          <h4>
            I Am Into <span>Web Development</span>
          </h4>
          <Button>About Me</Button>
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
};

export default Hero;
