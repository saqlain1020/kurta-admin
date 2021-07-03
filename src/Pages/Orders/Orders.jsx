import React from "react";
import { Chip, makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Dialog } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import OrderView from "src/Components/OrderView/OrderView";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
}));
const columns = ["ID", "Name", "Contact", "Actiion"];

const Orders = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const data = [
    [
      "dgjahk35",
      "Name 1",
      "0300000550",
      <>
        <Chip
          variant="contained"
          color="primary"
          label="View"
          onClick={handleOpen}
        />
      </>,
    ],
    [
      "dgjahk35",
      "Name 2",
      "0300000550",
      <>
        <Chip
          variant="contained"
          color="primary"
          label="View"
          onClick={handleOpen}
        />
      </>,
    ],
    [
      "dgjahk35",
      "Name 3",
      "0300000550",
      <>
        <Chip
          variant="contained"
          color="primary"
          label="View"
          onClick={handleOpen}
        />
      </>,
    ],
    [
      "dgjahk35",
      "Name 4",
      "0300000550",
      <>
        <Chip
          variant="contained"
          color="primary"
          label="View"
          onClick={handleOpen}
        />
      </>,
    ],
    [
      "dgjahk35",
      "Name 5",
      "0300000550",
      <>
        <Chip
          variant="contained"
          color="primary"
          label="View"
          onClick={handleOpen}
        />
      </>,
    ],
  ];

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <MUIDataTable title={"Orders List"} data={data} columns={columns} />
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h5">Order View</Typography>
        </DialogTitle>
        <DialogContent>
          <OrderView />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Orders;
