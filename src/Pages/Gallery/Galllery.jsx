import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import CustomGallery from "src/Components/CustomGallery/CustomGallery";

const useStyles = makeStyles((theme) => ({
  root: { marginTop: 20 },
}));

const data = [
  {
    src: require("src/Assets/images/gallery/1.jpg").default,
  },
  {
    src: require("src/Assets/images/gallery/2.jpg").default,
  },
  {
    src: require("src/Assets/images/gallery/3.jpg").default,
  },
  {
    src: require("src/Assets/images/gallery/4.jpg").default,
  },
  {
    src: require("src/Assets/images/gallery/5.jpg").default,
  },
  {
    src: require("src/Assets/images/gallery/6.jpg").default,
  },
  {
    src: require("src/Assets/images/gallery/7.jpg").default,
  },
  {
    src: require("src/Assets/images/gallery/8.jpg").default,
  },
  {
    src: require("src/Assets/images/gallery/9.jpg").default,
  },
];
const Galllery = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <CustomGallery data={data} />
      </Container>
    </div>
  );
};

export default Galllery;
