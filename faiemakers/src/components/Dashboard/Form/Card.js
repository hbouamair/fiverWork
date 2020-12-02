import React, { Component } from "react";
import img1 from "../../../assets/coeur.svg";
import ProgressBar from 'react-bootstrap/ProgressBar'
import icon1 from "../../../assets/logo1.svg";
import icon2 from "../../../assets/icon2.svg";
import icon3 from "../../../assets/icon3.svg";
import icon4 from "../../../assets/icon4.svg";
import icon5 from "../../../assets/icon5.svg";
import heart from '../../../assets/coeur.svg'
import DropZone from '../Dropzone/DropLogo';
import  toplogo from '../../../assets/badgeUp.svg'


import './card.css'

import logocard from '../../../assets/logoCard.svg'

import "../../../assets/css/style.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
      <div className="container-fluid">
        <div className="card-upload">
          <DropZone/>
        </div>
        
       
          <div className="row rt ">
            <div className="col-6 ">
              <h1 className="rse">RSE<br/>
              Global score</h1>
            </div>
            <div className="col-3 ">
              <img src={heart}/>
            </div>
          </div>
       
        <div className="prog" >
        <div className="progress-row">
          <div className="row">
            <div className="col-2">
              <img src={icon1}/>
            </div>
            <div className="col-7">
              <div className="progress-titre">
                <p className="progress-title">Social & Droit de l'Homme</p>
              </div>
              <div className="progress">
              <ProgressBar variant="var1" now={92} />
              </div> 
            </div>
            <div className="col-3">
              <h6 className="percontage">92%</h6>
            </div>
          </div>
        </div>
        <div className="progress-row">
          <div className="row">
            <div className="col-2">
              <img src={icon2}/>
            </div>
            <div className="col-7">
              <div className="progress-titre">
                <p className="progress-title">Environnement</p>
              </div>
              <div className="progress">
              <ProgressBar variant="var2" now={78} />
              </div> 
            </div>
            <div className="col-3">
              <h6 className="percontage">92%</h6>
            </div>
          </div>
        </div>
        <div className="progress-row">
          <div className="row">
            <div className="col-2">
            <img src={icon3}/>
            </div>
            <div className="col-7">
              <div class="progress-titre">
                <p className="progress-title">Santé/Sécurité </p>
              </div>
              <div className="progress">
              <ProgressBar variant="var3" now={98} />
              </div> 
            </div>
            <div className="col-3">
              <h6 className="percontage">92%</h6>
            </div>
          </div>
        </div>
        <div className="progress-row">
          <div className="row">
            <div className="col-2">
            <img src={icon4}/>
            </div>
            <div className="col-7">
              <div className="progress-titre">
                <p className="progress-title">Achats résponsables</p>
              </div>
              <div className="progress">
              <ProgressBar variant="var4" now={25} />
              </div> 
            </div>
            <div className="col-3">
              <h6 className="percontage">92%</h6>
            </div>
          </div>
        </div>
        <div className="progress-row">
          <div className="row">
            <div className="col-2">
            <img src={icon5}/>
            </div>
            <div className="col-7">
              <div class="progress-titre">
                <p className="progress-title">Éthique  & Gouvernance</p>
              </div>
              <div className="progress">
              <ProgressBar variant="var5" now={75} />
              </div> 
            </div>
            <div className="col-3">
              <h6 className="percontage">92%</h6>
            </div>
          </div>
        </div>
        </div>
       
     

      </div>
      <div className="card-footer foot">
          <div className="row">
      <div class="col-6">
        <img src={logocard}/>
      </div>
      <div className="line"></div>
      <div className="col-5 nexdate">
        <p className="date">Juillet 2020</p>
      </div>
    </div>
    </div>

    </div>
    );
  }
}
