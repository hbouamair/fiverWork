import React, { Component } from 'react'
import img1 from '../../../assets/new.svg'
import './tophead.css'

export default class TopHeader extends Component {
    render() {
        return (
            <div className="tp-head" >
            
            <img className="logo" src={img1} />
            <div className="titre1">
            
            <h3 className="title-net">  <span class="headline">  Network </span></h3>
            
            </div>
            <div className="btn1" >
            <button className="btn-home"> See my compagny public profil</button>
            </div>
            
            
        
                
            </div>
        )
    }
}
