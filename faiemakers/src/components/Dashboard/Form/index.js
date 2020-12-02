import React, { Component } from 'react'
import Form from './Form'
import Card from './Card'
import './form.css'
import badge from '../../../assets/Badge.svg'
export default class index extends Component {
    render() {
        return (
            <div className="hard-part">
            <div className="container">
                <div className="row">
                    <div className=" col-xs-12 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="form-right">
                            <div className="row">
                                <div class="col-xs-12 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                                    <h2>switch1</h2>
                                </div>
                                <div className=" col-xs-12 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                                    <h2>switch2</h2>
                                </div>
                            </div>
                            <h1>Moët Hennessy</h1>
                            <input className="description" type="text" placeholder="Description"/>
                            <h2>Texte section</h2>
                            <input className="titre" type="text" placeholder="titre"/>
                            <input className="add-line" type="text" placeholder="Add a few lines about your company"/>
    
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 tal3a">
                       <Card/>
                        <div className="logo-card">
                            <img src={badge}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
}
