import React from "react";
import "materialize-css";

import {
  Section,
  CardPanel,
  Row,
  Col,
  TextInput,
  Textarea,
  Icon,
  Button,
  Container,
  Collection,
  CollectionItem,
} from "react-materialize";

export const Contacts = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col m={6} s={12}>
            <CardPanel className="green darken-1">
              <span className="white-text">
                <i className="material-icons medium">email</i>
                <h5>Contactanos para ventas</h5>
                For a simpler card with less markup, try using a card panel
                which just has padding and a shadow effect
              </span>
            </CardPanel>
            <Collection header="Ubicacion">
              <CollectionItem>Olam Growly</CollectionItem>
              <CollectionItem>555 Beach rd, Suite 33</CollectionItem>
              <CollectionItem>Santo Domingo DR, 55555</CollectionItem>
            </Collection>
          </Col>
          <Col m={6} s={12}>
            <div class="card-panel grey lighten-3">
              <h5>Please fill out this form</h5>
              <div class="input-field">
                <input type="text" placeholder="Name" id="name" />
                <label for="name">Name</label>
              </div>
              <div class="input-field">
                <input type="email" placeholder="Email" id="email" />
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input type="text" placeholder="Phone" id="phone" />
                <label for="phone">Phone</label>
              </div>
              <div class="input-field">
                <textarea
                  class="materialize-textarea"
                  placeholder="Enter Message"
                  id="message"
                ></textarea>
                <label for="message">Message</label>
              </div>
              <input type="submit" value="Submit" class="btn" />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
