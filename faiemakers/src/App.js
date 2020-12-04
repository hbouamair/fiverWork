import logo from "./logo.svg";
import "./App.css";
import "./assets/css/style.css";
import Navbar from "./Components/Navbar/index";
import Box from "@material-ui/core/Box";
import Apphead from "./Components/Appheader/index";
import Grid from "@material-ui/core/Grid";
import Form from "./Components/Section1/Form";
import Card from "./Components/Section1/Card";
import logoPr from "./assets/images/logoPrinc.svg";
import DropZone from "./Components/DropZone/DropZone";
import DropZone1 from "./Components/DropZone/DropZone1";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Apphead />
       <BrowserRouter>

      <Navbar />
         <Switch>
          <Route path="/"  />
         
        </Switch>
      </BrowserRouter>
      {/* Always force latest IE rendering engine or request Chrome Frame */}
      <div className="upload">
        <div className="container">
          <div className="hero-upload container">
            {" "}
            <DropZone1 />{" "}
          </div>
        </div>
      </div>
      <div className="hard-part">
        <div className="container-fluid top ">
          <Grid  className="row">
            <Grid item xs={12} xl={8} lg={8} md={12} sm={12}>
              <Form />
            </Grid>
            <Grid className="tal3a" item xs={12} xl={4} lg={4} md={12} sm={12}>
              <Card />

              <div className="logo-card">
                <img className="img-blur" src={logoPr} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Container className="last-upload ">
        <div className="footer-upload ">
          <DropZone />
        </div>
        <div className="contbtn">
          <button className="btn-add"> Add another</button>
        </div>
      </Container>
    </div>
  );
}

export default App;
