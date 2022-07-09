import React, { useContext, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { clothesContext } from "../../contexts/clothesContext";
import { useNavigate } from "react-router-dom";
import "../AddClothes/AddClothes.css";

const AddClothes = () => {
  const { createClothes } = useContext(clothesContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newClothes = {
      title,
      description,
      price,
      image,
    };
    if (!title.trim() || !description.trim() || !image.trim() || !price) {
      alert("Please fill all required fields.");
    } else {
      createClothes(newClothes);
      navigate("/clothes");
    }
  }
  return (
    <Container className="add-clothes" maxWidth="sm" style={{}}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginTop={"70px"}
        marginBottom={"70px"}>
        <Typography
          display={"flex"}
          justifyContent={"center"}
          marginBottom={"20px"}
          marginTop={"30px"}
          variant="h4">
          Add New
        </Typography>
        <TextField
          style={{ marginBottom: "15px", color: "inherit" }}
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          style={{ marginBottom: "15px" }}
          type="number"
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(+e.target.value)}
        />
        <TextField
          style={{ marginBottom: "15px" }}
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          style={{ marginBottom: "15px" }}
          label="Image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button
          className="add-save"
          color="inherit"
          borderColor="inherit"
          onClick={handleSave}
          variant="outlined">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddClothes;
