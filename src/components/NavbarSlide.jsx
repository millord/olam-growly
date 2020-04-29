import React from "react";
import "materialize-css";
import { Navbar, NavItem, Icon } from "react-materialize";

export const NavbarSlide = () => {
  return (
    <Navbar
      alignLinks="right"
      className="green darken-1"
      brand={
        <a className="brand-logo" href="#">
          <img width="40" height="40" src={require("./img/logo.jpg")} />
        </a>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="">Inicio</NavItem>
      <NavItem href="">Buscar</NavItem>
      <NavItem href="">Productos</NavItem>
      <NavItem href="">Testimonios</NavItem>
      <NavItem href="components.html">Contactanos</NavItem>
    </Navbar>
  );
};
