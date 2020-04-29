import React from "react";
import "materialize-css";
import { Link } from "react-router-dom";
import { Footer } from "react-materialize";
import "../components/styles.css";

export const PortFooter = () => {
  return (
    <Footer className="green darken-1 center-align">
      <h5 className="flow-text">Olam Growly © 2020</h5>
    </Footer>
  );
};
