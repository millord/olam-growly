import React from "react";
import { NavbarSlide } from "./components/NavbarSlide";
import { SliderComponent } from "./components/Slider-component";
import { SearchBox } from "./components/Search-component";
import { IconBoxes } from "./components/IconBoxes-component";
import { Testimonials } from "./components/Testimonial";
import { SocialMedia } from "./components/SocialMedia";
import { Gallery } from "./components/Gallery";
import { Contacts } from "./components/Contacts";
import { PortFooter } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <NavbarSlide />
      <SliderComponent />
      <SearchBox />
      <IconBoxes />
      <Testimonials />
      <SocialMedia />

      <Contacts />
      <PortFooter />
    </div>
  );
};
