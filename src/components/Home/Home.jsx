// import { height, width } from "@mui/system";
// import { Container } from "@mui/system";
import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import Footer from "../Footer/Footer";
import Video from "../Media/pexels-cottonbro-5836756.mp4";

const Home = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}>
        <source src={Video} />
      </video>
    </div>
  );
};

export default Home;
