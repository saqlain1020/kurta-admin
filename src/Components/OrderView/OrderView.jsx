import React from "react";
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    listStyle: "inside",
    fontSize:18,
    lineHeight:2,
    
  },
}));

const OrderView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        <li><b>Order Id:</b> asdasfaf</li>
        <li><b>name: </b>lorem ipsum</li>
        <li><b>email: </b>lorem ipsum</li>
        <li><b>contact: </b>lorem ipsum</li>
        <li><b>address: </b>lorem ipsum</li>
        <li><b>shoulder: </b>lorem ipsum</li>
        <li><b>chest: </b>lorem ipsum</li>
        <li><b>waist: </b>lorem ipsum</li>
        <li><b>hips: </b>lorem ipsum</li>
        <li><b>sleeves: </b>lorem ipsum</li>
        <li><b>thigh: </b>lorem ipsum</li>
        <li><b>calf: </b>lorem ipsum</li>
        <li><b>shalwarLength: </b>lorem ipsum</li>
        <li><b>kurtaLength: </b>lorem ipsum</li>
        <li><b>collar: </b>lorem ipsum</li>
      </ul>
    </div>
  );
};

export default OrderView;
