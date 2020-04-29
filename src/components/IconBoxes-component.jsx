import React from "react";
import "materialize-css";
import { Container, Row, Card, Section ,Col} from "react-materialize";

export const IconBoxes = () => {
  return (
    <Section className="center section-icons">
      <Container>
        <Row>
          <Col s={12} m={4}>
            <Card>
              <i className="material-icons  large teal-text">room</i>
              <h4>Pick Where</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
          </Col>
          <Col s={12} m={4}>
            <Card>
              <i className="material-icons  large teal-text">room</i>
              <h4>Pick Where</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
          </Col>
          <Col s={12} m={4}>
            <Card>
              <i className="material-icons  large teal-text">room</i>
              <h4>Pick Where</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
