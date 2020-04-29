import React from "react";
import "materialize-css";

import {
  Section,
  CardPanel,
  Row,
  Col,
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
                Para cualquier pedido
              </span>
            </CardPanel>
            <Collection header="Ubicación">
              <CollectionItem>Olam Growly</CollectionItem>
              <CollectionItem>Autopista Duarte , Apt. 34</CollectionItem>
              <CollectionItem>Santo Domingo DR, XXXXX</CollectionItem>
            </Collection>
          </Col>
          <Col m={6} s={12}>
            <div class="card-panel grey lighten-3">
              <h5>Envia tus sugerencias</h5>
              <div class="input-field">
                <input type="text" placeholder="Nombre" id="nombre" />
                <label for="nombre">Nombre</label>
              </div>
              <div class="input-field">
                <input type="email" placeholder="Nombre" id="email" />
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input type="text" placeholder="Telefono" id="tefono" />
                <label for="telefono">Telefono</label>
              </div>
              <div class="input-field">
                <textarea
                  class="materialize-textarea"
                  placeholder="Entre un mensaje"
                  id="message"
                ></textarea>
                <label for="message">Mensaje</label>
              </div>
              <input type="submit" value="Enviar" class="btn" />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
