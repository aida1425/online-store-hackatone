import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container className="footer" maxWidth="xl">
      <footer className="main-footer">
        <div className="main-footer1">
          <Button
            className="button-footer"
            style={{ marginTop: "30px" }}
            onClick={() => navigate("/about-us")}>
            About Us
          </Button>
        </div>
        <div>
          <Typography
            className="button-header"
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "nunito",
              fontWeight: 400,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "70px",
              marginRight: "50px",

              marginTop: "30px",
            }}>
            MONO
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "nunito",
              fontWeight: 400,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            MONO
          </Typography>
        </div>

        <div className="img" style={{ marginTop: "35px" }}>
          <img
            src="data:image/png;base64,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"
            width={"40px"}
            alt=""
          />
          <img
            src="https://pngicon.ru/file/uploads/whatsapp.png"
            width={"40px"}
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuV0aohFP_G0MjgtVozMaFrg5n6rwYv5D1sdXf2nnGnESuqK5q1c7eL_cUSd5hdnt50g&usqp=CAU"
            width={"40px"}
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg"
            width={"40px"}
            alt=""
          />
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
