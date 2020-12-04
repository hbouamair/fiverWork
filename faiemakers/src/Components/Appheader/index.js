import React, { Component } from "react";
import img1 from "../../assets/images/new.svg";
import "./tophead.css";
import Grid from "@material-ui/core/Grid";

export default class TopHeader extends Component {
  render() {
    return (
      <div className="top-head ">
        <Grid container>
          <Grid item xs={12} xl={3} lg={3} md={4} sm={6} className="head">
            <Grid container>
              <Grid item item xs={3} xl={2} lg={2} md={2} sm={2}>
                <img className="logo" src={img1} />
              </Grid>

              <Grid item xs={2} xl={1} lg={2} md={2} sm={3}>
                <div className="titre1">
                  <h3 className="title-net"> Network </h3>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={3} lg={6} md={6} sm={6} className="bton">
            <div className="btn1">
              <button className="btn-home">
                {" "}
                See my compagny public profil
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
