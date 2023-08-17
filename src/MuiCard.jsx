import React, { useState } from "react";
import "./Card.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useQuery } from "react-query";
import { Box, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function Cards() {
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const fetchData = () => {
    fetch("https://api.slingacademy.com/v1/sample-data/photos/25")
      .then((res) => {
        console.log(res);
        const jsonRes = res.json();
        return jsonRes;
      })
      .then((data) => {
        setImage(data.photo.url);
        return data;
      })
      .then((data) => setDesc(data.photo.description))
      .catch((err) => console.log("from catch :" + err.message));
  };

  const { isLoad, isError, error } = useQuery("image-data", fetchData);
  if (isError) {
    console.log(error.message);
  }
  if (isLoad) {
    return <h2> Loading...</h2>;
  }
  // const handleOnClick = () => {
  //   setisFlipped(!isFlipped);
  //   console.log("clicked");
  // };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="maincontainer"
    >
      <Box className="thecard">
        {/* <p> helloooo </p> */}
        <Card className="thefront">
          <CardMedia
            className="thefront"
            component="img"
            image={image}
            alt="test image"
          />
        </Card>
        {/* <Card className="theback">  */}
        <CardContent className="theback" alt="wrong">
          <Typography variant="h5">{desc}</Typography>
        </CardContent>
        {/* </Card>   */}
      </Box>
    </Grid>
  );
}
