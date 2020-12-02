import React from 'react'
import './assets/css/style.css'
import DropZone from './components/Dashboard/Dropzone/onlyDrop'
import Topheader from './components/Dashboard/Topheader/TopHeader'
import Card from './components/Dashboard/Form/Card'
import Logo from './'
import logoPr from './assets/logoPrinc.svg'
import Form from './components/Dashboard/Form/Form'
import { Button } from 'semantic-ui-react'

 class NewCompenent extends React.Component{
  render() {
    return (
      <div >
      <div>
      

      
      </div>
        {/* Always force latest IE rendering engine or request Chrome Frame */}
        <div className="upload">
          <div className="container-fluid">
            <div className="hero-upload"> <DropZone/></div>
          </div>
        </div>
        <div className="hard-part">
          <div className="container-fluid   py-5">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <Form/>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 tal3a">
              <Card/>
             
                <div className="logo-card">
                  <img src={logoPr} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="last-upload ">
          <div className="container">
            <div className="footer-upload">
              <DropZone/>
            </div>
            <div className="contbtn">
            <button className="btn-add"> Add another</button>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
};
export default NewCompenent;