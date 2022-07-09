import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { clothesContext } from "../../contexts/clothesContext";

import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import { IconButton, Rating } from "@mui/material";
import "../ClothesCard/ClothesCard.css";
export default function ClothesCard({ item }) {
  const { deleteClothes } = React.useContext(clothesContext);
  const { addToCart, checkProductInCart } = React.useContext(cartContext);
  const navigate = useNavigate();
  const [productState, setProductState] = React.useState(
    checkProductInCart(item.id)
  );
  return (
    <Card
      className="card-name"
      maxWidth={"40px"}
      sx={{
        maxWidth: 360,
        margin: "10px",
        maxHeight: 800,
      }}>
      <CardMedia
        component="img"
        height="500"
        image={item.image}
        alt="product"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>

      <CardActions style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          color="inherit"
          size="small"
          onClick={() => deleteClothes(item.id)}>
          Delete
        </Button>
        <Button
          color="inherit"
          size="small"
          onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
        <Button
          color="inherit"
          size="small"
          onClick={() => navigate(`/details/${item.id}`)}>
          More
        </Button>
        <IconButton
          className="cart"
          onClick={() => {
            addToCart(item);
            setProductState(checkProductInCart(item.id));
          }}>
          <AddShoppingCartIcon color={productState ? "error" : "inherit"} />
        </IconButton>
      </CardActions>
      <Rating
        className="rating"
        name="size-small"
        defaultValue={2}
        size="small"
      />
    </Card>
  );
}
