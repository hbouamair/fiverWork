import React, { Component } from 'react'
import Navbar from './Navbar'
import Header  from './Topheader/TopHeader'
import DropZone from './Dropzone/DropZone.jsx'
import Form from './Form/index'
import Last from './lastupload/LastUpload'



export default class Dash extends Component {
    render() {
        return (
            
            <div className="container-fluid">
            
            <Navbar/>
            <DropZone/>
            <Form/>
            <Last/>
            
            

                
            </div>
        )
    }
}
