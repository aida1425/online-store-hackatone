import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Pagination, Slider } from "@mui/material";

import { clothesContext } from "../../contexts/clothesContext";

import ClothesCard from "../ClothesCard/ClothesCard";

import { useSearchParams } from "react-router-dom";

import "./ClothesList.css";
import Footer from "../Footer/Footer";

const ClothesList = () => {
  const { clothes, getClothes, pages } = useContext(clothesContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  const [price, setPrice] = useState([1, 100000]);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 6,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);

  useEffect(() => {
    getClothes();
  }, [searchParams]);

  return (
    <Container>
      <Box marginBottom={"50px"}>
        <Slider
          className="slider"
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(event, value) => {
            setPrice(value);
          }}
          valueLabelDisplay="auto"
          min={0}
          max={50000}
          step={1000}
        />
      </Box>
      <Box style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {clothes.map(item => (
          <ClothesCard key={item.id} item={item} />
        ))}
      </Box>
      <Box>
        <Pagination
          onChange={(event, page) => {
            setCurrentPage(page);
          }}
          page={currentPage}
          count={pages}
          color="grey"
        />
      </Box>
      <Footer />
    </Container>
  );
};

export default ClothesList;
