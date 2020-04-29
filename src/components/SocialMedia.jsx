import React from "react";
import "materialize-css";
import { Link } from "react-router-dom";
import { Section, Container, Row, Col } from "react-materialize";
import "../components/styles.css";

export const SocialMedia = () => {
  return (
    <Section className="green darken-1 white-text center">
      <Container>
        <Row>
          <Col>
            <h4>Sigue a Olam Growly</h4>
            <p>Siguenos en las redes sociales para ofertas especiales</p>
            <Link to="#">
              <i className="fa fa-facebook fa-4x white-text"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-twitter fa-4x white-text"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-linkedin fa-4x white-text"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-google-plus fa-4x white-text"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-pinterest fa-4x white-text"></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
