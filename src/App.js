import { Container } from "@material-ui/core";
import "./App.css";
import Navbar from "src/Components/Navbar/Navbar";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <Routes />
      </Container>
    </>
  );
}

export default App;
