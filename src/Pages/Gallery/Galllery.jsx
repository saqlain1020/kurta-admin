import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Fab } from "@material-ui/core";
import CustomGallery from "src/Components/CustomGallery/CustomGallery";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: { marginTop: 20 },
  addIcon: {
    position: "fixed",
    right: 20,
    bottom: 20,
    color: "white",
  },
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
  const ref = React.createRef();

  const handleInputChange = (e) => {
    //show image selected
    console.log(e.target.files[0]);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <CustomGallery data={data} />
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addIcon}
          onClick={() => ref.current.click()}
        >
          <AddIcon />
        </Fab>
        <input
          type="file"
          accept="image/*"
          ref={ref}
          style={{ display: "none" }}
          onChange={handleInputChange}
        />
      </Container>
    </div>
  );
};

export default Galllery;
