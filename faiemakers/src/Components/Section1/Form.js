import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./form.css";
import { TextArea } from "semantic-ui-react";
import Switch from "./Switch";
import Switch1 from "./Switch2";
import { Input } from "semantic-ui-react";

export default class Form extends Component {
  render() {
    return (
      <div className="form-right col-md-12">
        <Grid container className=" rat">
          <Grid item xs={12} xl={3} lg={3} md={4} sm={6}>
            <div className="row" style={{ marginLeft: "0px" }}>
              <Grid item xs={4} md={3} sm={4} lg={3}>
                <Switch />
              </Grid>

              <Grid item xs={8} md={8} sm={8} lg={8}>
                <p className="switch-tit1">Visible by all </p>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} xl={3} lg={4} md={4} sm={6}>
            <div className="row" style={{ marginLeft: "0px" }}>
              <Grid item xs={4} md={4} sm={4} lg={3}>
                <Switch1 />
              </Grid>

              <Grid item xs={8} md={8} sm={8} lg={8}>
                <p className="switch-tit1"> RSE Score by request only </p>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <h1 className="Moet">Moët Hennessy</h1>
        <TextArea placeholder="Description" className="description" />
        <h2 className="sec-text">Texte section</h2>
        <Input placeholder="Title" className="titre" />
        <TextArea
          placeholder="Add a few lines about your company"
          className="add-line"
        />
      </div>
    );
  }
}
