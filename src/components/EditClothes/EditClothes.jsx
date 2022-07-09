import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { clothesContext } from "../../contexts/clothesContext";
import "../EditClothes/Edit.css";
import Loader from "../Loader/Loader";

const EditClothes = () => {
  const { getOneClothes, oneClothes, updateClothes } =
    useContext(clothesContext);
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOneClothes(id);
  }, []);
  useEffect(() => {
    if (oneClothes) {
      setTitle(oneClothes.title);
      setDescription(oneClothes.description);
      setPrice(oneClothes.price);
      setImage(oneClothes.image);
    }
  }, [oneClothes]);

  function handleSave() {
    const editedClothes = {
      title,
      description,
      price,
      image,
    };
    updateClothes(id, editedClothes);
    navigate("/clothes");
  }
  return oneClothes ? (
    <Container maxWidth="lg" className="main-edit">
      <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
        <Typography
          marginTop={"20px"}
          marginBottom={"20px"}
          display={"flex"}
          justifyContent={"center"}
          variant="h4">
          Edit Clothes
        </Typography>
        <TextField
          className="edit-fild"
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          className="edit-fild"
          style={{ marginTop: "15px", color: "inherit" }}
          type="number"
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(+e.target.value)}
        />
        <TextField
          className="edit-fild"
          style={{ marginTop: "15px" }}
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          className="edit-fild"
          style={{ marginTop: "15px" }}
          label="Image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button
          className="save"
          style={{ marginTop: "15px" }}
          onClick={handleSave}
          variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default EditClothes;
