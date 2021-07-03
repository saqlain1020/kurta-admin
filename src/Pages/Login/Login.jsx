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

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    maxWidth: 350,
    margin: "auto",
    marginTop: 20,
  },
}));

const Login = () => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
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
                <TextField label="Email" fullWidth type="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password" fullWidth type="password" />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary">
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
