import { Box, Container } from "@mui/material";
import React from "react";
import "../AboutUs/AboutUs.css";

const AboutUs = () => {
  return (
    <Container className="about-us" maxWidth="xl">
      <Box className="about-main">
        <Box style={{ display: "flex", marginTop: "50px" }}>
          <Box padding={"50px"} fontSize={"20px"}>
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              WHO WE ARE
            </h3>
            <h6
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
              }}>
              We are one of the world's largest fashion retailers, with seven
              distinct brands.
            </h6>
            Inditex is one of the world's largest fashion retailers, with seven
            brands (Zara, Pull&Bear, Massimo Dutti, Bershka, Stradivarius, Oysho
            and Zara Home) selling in 215 markets through its online platform or
            its 6,477 stores in 95 markets. We have come a long way since 1963,
            when we started out as a small family business in a workshop making
            women’s clothing. Over the years, our size may have changed, but one
            underlying idea has stayed the same – the customer is at the centre
            of everything we do.
          </Box>
          <Box padding={"50px"}>
            <img
              src="https://www.inditex.com/documents/10279/587441/11.jpg/daa7b849-6105-17b0-355c-a4b9da892c96?version=1.0&t=1528371169941&imageThumbnail=2"
              alt=""
            />
          </Box>
        </Box>
        <Box
          className="about-us-box"
          style={{ display: "flex", marginTop: "50px" }}>
          <Box className="about-us-box" padding={"50px"}>
            <img
              src="https://www.inditex.com/documents/10279/587441/2.jpg/29f56b9f-8e52-f58b-31f1-13148a6f528b?version=1.0&t=1647879240126&imageThumbnail=2"
              alt=""
            />
          </Box>
          <Box className="about-us-box" padding={"50px"} fontSize={"20px"}>
            By working closely together as a single company globally focused on
            the key elements of fashion production –design, manufacture,
            distribution and retail– with three pillars -flexibility, digital
            integration and sustainability- we brought our customers closer than
            ever to the products they wanted at affordable prices. The success
            of our first brand –Zara was followed by international expansion at
            the end of the 1980s and the successive launch of new brands, that
            now have an integrated model of stores and online.
          </Box>
        </Box>
        <Box
          className="about-us-box"
          style={{ display: "flex", marginTop: "30px" }}>
          <Box className="about-us-box" padding={"50px"} fontSize={"20px"}>
            <h6
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
              }}>
              Value beyond profit
            </h6>
            Inditex's shares have been listed on the Madrid stock exchange since
            2001 and are included in blue chip stock indices such as the Ibex
            35, FTSE Eurotop 100 and the Eurostoxx 600. Our workforce never
            loses sight of the customer. We work to create value beyond profit,
            putting people and the environment at the centre of our
            decision-making, and always striving to do and be better. It is
            fundamental to how we do business that our fashion is Right to Wear.
          </Box>
          <Box className="about-us-box" padding={"50px"}>
            <img
              src="https://www.inditex.com/documents/10279/587441/17.jpg/5edcb7a4-a934-495e-9943-df1b1c5dfb25?version=1.0&t=1528389396652&imageThumbnail=2"
              alt=""
            />
          </Box>
        </Box>
        <Box
          className="about-us-img"
          style={{
            display: "flex",
            marginTop: "30px",
            marginLeft: "100px",
            marginBottom: "30px",
          }}>
          <img
            width={"1200px"}
            height={"500px"}
            src="https://snazzy-maps-cdn.azureedge.net/assets/8097-wy.png?v=20170626083314"
            alt=""
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
