import React from "react";
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    listStyle: "inside",
  },
}));

const OrderView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        <li>Order Id: asdasfaf</li>
        <li>name: lorem ipsum</li>
        <li>email: lorem ipsum</li>
        <li>contact: lorem ipsum</li>
        <li>address: lorem ipsum</li>
        <li>shoulder: lorem ipsum</li>
        <li>chest: lorem ipsum</li>
        <li>waist: lorem ipsum</li>
        <li>hips: lorem ipsum</li>
        <li>sleeves: lorem ipsum</li>
        <li>thigh: lorem ipsum</li>
        <li>calf: lorem ipsum</li>
        <li>shalwarLength: lorem ipsum</li>
        <li>kurtaLength: lorem ipsum</li>
        <li>collar: lorem ipsum</li>
      </ul>
    </div>
  );
};

export default OrderView;
