import React from "react";
import "materialize-css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Icon,
  CardTitle,
  Section,
} from "react-materialize";

export const Testimonials = () => {
  return (
    <Section>
      <Container>
        <Row>
          <h4 className="center-align">
            Nuestros <span className="teal-text">Aceites</span> más Populares
          </h4>
          <Col m={4} s={12}>
            <Card
              actions={[
                <a key="1" href="#">
                  This is a Link
                </a>,
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image={require("../components/img/aceite1.jpg")}>
                  Card Title
                </CardTitle>
              }
              revealIcon={<Icon>more_vert</Icon>}
            >
              Here is the standard card with an image thumbnail.
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              actions={[
                <a key="1" href="#">
                  This is a Link
                </a>,
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image={require("../components/img/aceite2.jpg")}>
                  Card Title
                </CardTitle>
              }
              revealIcon={<Icon>more_vert</Icon>}
            >
              Here is the standard card with an image thumbnail.
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              actions={[
                <a key="1" href="#">
                  This is a Link
                </a>,
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image={require("../components/img/aceite3.jpg")}>
                  Card Title
                </CardTitle>
              }
              revealIcon={<Icon>more_vert</Icon>}
            >
              Here is the standard card with an image thumbnail.
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
