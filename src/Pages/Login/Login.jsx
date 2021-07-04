import React from "react";
import {
  CardContent,
  Card,
  Typography,
  TextField,
  Container,
  makeStyles,
  Button,
  Grid,
} from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import history from "src/Util/history";

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    maxWidth: 350,
    margin: "auto",
    marginTop: 100,
  },
}));

const Login = () => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit")
    history.push("/orders");
  };
  return (
    <Container maxWidth="lg" className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="h5"
              color="textPrimary"
              style={{ marginBottom: 10 }}
            >
              Login
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Email" fullWidth type="email" required/>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password" fullWidth type="password" required/>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </Container>
  );
};

export default Login;
