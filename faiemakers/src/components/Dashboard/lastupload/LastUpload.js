import React, { Component } from "react";
import'./last.css'
import Upload from '../Dropzone/onlyDrop'
export default class LastUpload extends Component {
  render() {
    return (
      <div class="last-upload">
        <div class="container">
          <div class="footer-upload">
            <Upload/>
          </div>
          <div className="add-an">
          <button className="btn-upload"> Add another </button>
          </div>
        </div>
        
      </div>
    );
  }
}
