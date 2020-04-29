import React from "react";
import "materialize-css";
import { Link } from "react-router-dom";
import { Section, Container, Row, Col, MediaBox } from "react-materialize";
import "../components/styles.css";

export const Gallery = () => {
  return (
    <Section>
      <Container>
        <Row>
          <h5 className="align-center">Galeria de productos</h5>
          <Col m={3} s={12}>
            <MediaBox
              id="MediaBox_7"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img
                alt=""
                src="https://materializecss.com/images/sample-1.jpg"
                width="300"
              />
            </MediaBox>
          </Col>
        </Row>
        <Row>
          <Col m={3} s={12}>
            <MediaBox
              id="MediaBox_7"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img
                alt=""
                src="https://materializecss.com/images/sample-1.jpg"
                width="300"
              />
            </MediaBox>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
