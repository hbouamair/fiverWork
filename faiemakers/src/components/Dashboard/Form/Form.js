import React from "react";
import logoPr from "../../../assets/logoPrinc.svg";
import "../../../assets/css/style.css";
import "./form.css";
import {  TextArea } from 'semantic-ui-react'
import Switch from './Switch'
import { Input } from 'semantic-ui-react'

export default function Form() {
  return (
    <div className="form-right">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
        <Switch/>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
        <div class="onoffswitch">
        <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked/>
        <label class="onoffswitch-label" for="myonoffswitch"></label>
          </div>
        </div>
      </div>
      <h1 className="Moet">Moët Hennessy</h1>
      <TextArea placeholder='Description'  className="description"  />
      <h2 className="sec-text">Texte section</h2>
      <Input placeholder='Title'  className="titre"/>
      <TextArea  placeholder="Add a few lines about your company" className="add-line"  />
    </div>
  );
}
