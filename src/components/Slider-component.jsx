import React from "react";
import "materialize-css";
import { Slider, Slide, Caption, Button } from "react-materialize";

export const SliderComponent = () => {
  return (
    <section>
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 400,
          indicators: false,
          interval: 2000,
        }}
      >
        <Slide image={<img alt="" src={require("./img/crop2.jpeg")} />}>
          <Caption placement="left">
            <h3>Olam Growly </h3>
            <h5 className="light grey-text text-lighten-3">
              Coperativa Agraria.
            </h5>
            <Button
              node="button"
              style={{
                marginRight: "5px",
              }}
              waves="light"
            >
              ir
            </Button>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={require("./img/crop1.jpeg")} />}>
          <Caption placement="center">
            <h3>Aceites esenciales!</h3>
            <h5>Encuentra el tuyo.</h5>
            <Button
              node="button"
              style={{
                marginRight: "5px",
              }}
              waves="light"
            >
              ir
            </Button>
          </Caption>
        </Slide>

        <Slide image={<img alt="" src={require("./img/crop3.jpeg")} />}>
          <Caption placement="right">
            <h3>Porque mereces lo mejor!</h3>
            <h5 className="light grey-text text-lighten-3">
              Solo nosotros lo hacemos asi.
            </h5>
            <Button
              node="button"
              style={{
                marginRight: "5px",
              }}
              waves="light"
            >
              ir
            </Button>
          </Caption>
        </Slide>
      </Slider>
    </section>
  );
};
