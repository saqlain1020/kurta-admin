import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./burgerMenuCss.css";
import { Hidden } from "@material-ui/core";
import history from "src/Util/history";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 80,
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    marginLeft: 20,
    position: "relative",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontWeight: 400,
    "&:hover": {
      "&::after": {
        width: "100%",
      },
    },
    "&::after": {
      transition: "all 300ms ease-in-out",
      content: "''",
      width: "0%",
      height: 2,
      background: "#d4af37",
      bottom: 0,
      left: 0,
      position: "absolute",
    },
  },
  activeLink: {
    color: "#d4af37",
  },
  btn: {
    marginLeft: 20,
  },
}));

const links = [
  {
    name: "login",
    path: "/",
  },
  {
    name: "orders",
    path: "/orders",
  },
  {
    name: "gallery",
    path: "/gallery",
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Hidden smUp>
        <Menu right isOpen={open} onOpen={handleOpen} onClose={handleClose}>
          {links.map((item) => (
            <NavLink
              key={uuid()}
              to={item.path}
              className={classes.link}
              activeClassName={classes.activeLink}
              style={{ marginTop: 10 }}
              onClick={handleClose}
            >
              {item.name}
            </NavLink>
          ))}
        </Menu>
      </Hidden>
      <div className={clsx(classes.root, "center")}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h4">Admin</Typography>
          <Hidden xsDown>
            <div>
              {links.map((item) => (
                <NavLink
                  to={item.path}
                  className={classes.link}
                  activeClassName={classes.activeLink}
                  exact
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Hidden>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
