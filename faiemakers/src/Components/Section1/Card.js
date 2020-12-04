import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import icon1 from "../../assets//icons/logo1.svg";
import icon2 from "../../assets//icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import icon4 from "../../assets//icons/icon4.svg";
import icon5 from "../../assets//icons/icon5.svg";
import heart from "../../assets/icons/coeur.svg";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Droplogo from "../DropZone/Droplogo";
import "./card.css";
import { Container } from "semantic-ui-react";

import logocard from "../../assets/icons/logoCard.svg";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <Container>
          <Container className="card-upload">
            <Droplogo />
          </Container>

          <Container className="cont-ligne">
            <div className="ligne"></div>
          </Container>
          <Grid className="blur ">
            <Grid Container className="row rt">
              <Grid item xs={8}>
                <h1 className="rse">
                  RSE
                  <br />
                  Global score
                </h1>
              </Grid>
              <Grid item lg={2} xl={2} item xs={3}>
                <img className="heart" src={heart} />
              </Grid>
            </Grid>
            <Container className="cont-ligne1">
              {" "}
              <div className="ligne"></div>
            </Container>

            <Box className="prog">
              <div className="progress-row">
                <Grid container className="row">
                  <Grid item xs={2}>
                    <img src={icon1} />
                  </Grid>
                  <Grid item xs={7}>
                    <div className="progress-titre">
                      <p className="progress-title">
                        Social & Droit de l'Homme
                      </p>
                    </div>
                    <div className="progress">
                      <ProgressBar variant="var1" now={92} />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <h6 className="percontage">92%</h6>
                  </Grid>
                </Grid>
              </div>
              <div className="progress-row">
                <Grid container className="row">
                  <Grid item xs={2}>
                    <img src={icon2} />
                  </Grid>
                  <Grid item xs={7}>
                    <div className="progress-titre">
                      <p className="progress-title">Environnement</p>
                    </div>
                    <div className="progress">
                      <ProgressBar variant="var2" now={78} />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <h6 className="percontage">78%</h6>
                  </Grid>
                </Grid>
              </div>
              <div className="progress-row">
                <Grid container className="row">
                  <Grid item xs={2}>
                    <img src={icon3} />
                  </Grid>
                  <Grid item xs={7}>
                    <div class="progress-titre">
                      <p className="progress-title">Santé/Sécurité </p>
                    </div>
                    <div className="progress">
                      <ProgressBar variant="var3" now={98} />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <h6 className="percontage">98%</h6>
                  </Grid>
                </Grid>
              </div>
              <div className="progress-row">
                <Grid container className="row">
                  <Grid item xs={2}>
                    <img src={icon4} />
                  </Grid>
                  <Grid item xs={7}>
                    <div className="progress-titre">
                      <p className="progress-title">Achats résponsables</p>
                    </div>
                    <div className="progress">
                      <ProgressBar variant="var4" now={25} />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <h6 className="percontage">25%</h6>
                  </Grid>
                </Grid>
              </div>
              <div className="progress-row">
                <Grid container className="row">
                  <Grid item xs={2}>
                    <img src={icon5} />
                  </Grid>
                  <Grid item xs={7}>
                    <div class="progress-titre">
                      <p className="progress-title">Éthique & Gouvernance</p>
                    </div>
                    <div className="progress">
                      <ProgressBar variant="var5" now={75} />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <h6 className="percontage">75%</h6>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Grid>
        </Container>
        <div className="card-footer foot">
          <Grid container justify="center" className="row">
            <Grid item xs={6}>
              <img className="logo-card" src={logocard} />
            </Grid>
            <div className="line"></div>
            <Grid item xs={5} className="nexdate">
              <p className="date">Juillet 2020</p>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
