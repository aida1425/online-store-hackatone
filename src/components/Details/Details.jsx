import React, { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { clothesContext } from "../../contexts/clothesContext";
// import "../Details/Details.css";

import Loader from "../Loader/Loader";

const Details = () => {
  const { id } = useParams();
  const { oneClothes, getOneClothes } = useContext(clothesContext);
  useEffect(() => {
    getOneClothes(id);
  }, []);
  return oneClothes ? (
    <Container className="details" style={{ marginTop: "70px" }}>
      <Box>
        <img src={oneClothes.image} width="50%" alt="clothes" />
      </Box>
      <Box style={{ marginTop: "50px" }}>
        <Typography variant="h4">{oneClothes.title}</Typography>
        <Typography style={{ marginTop: "20px" }} variant="h5">
          {oneClothes.description}
        </Typography>
        <Typography style={{ marginTop: "10px" }} variant="h5">
          {oneClothes.price}
        </Typography>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default Details;
