import React from "react";
import { Tab } from "semantic-ui-react";
import "./Navbar.css";
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit,faEnvelope, faTasks, faUserCircle } from '@fortawesome/free-solid-svg-icons';
//see https://github.com/Semantic-Org/Semantic-UI/issues/5589#issuecomment-400949244

const panes = [
  {
    menuItem: "Invitations",
  },
  {
    menuItem: "Manage",
  },
  { 
    menuItem: "Messages",
  },
  {
    menuItem: "Edit company page",
  },
];

const TabExampleSecondaryPointing = () => (

<div className="Nav-all">

  <div className="nav-cont ">
    <Tab
      defaultActiveIndex={3}
      menu={{ secondary: true, pointing: true }}
      panes={panes}
    />
  </div>
  <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
              <NavItem >
                <NavLink to="/" className="nav-link bottom-nav-link" >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={faEdit}/>
                    <div className="bottom-tab-label">Invitaion</div>
                  </div>
                </NavLink>
                
              </NavItem>
              <NavItem >
                <NavLink to="/" className="nav-link bottom-nav-link" >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                  <FontAwesomeIcon size="lg" icon={faTasks}/>
                    <div className="bottom-tab-label">Manage</div>
                  </div>
                </NavLink>
                
              </NavItem>
              <NavItem >
                <NavLink to="/" className="nav-link bottom-nav-link"  >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                  <FontAwesomeIcon size="lg" icon={faEnvelope}/>
                    <div className="bottom-tab-label">Messages</div>
                  </div>
                </NavLink>
                
              </NavItem>
              <NavItem >
                <NavLink to="/" className="nav-link bottom-nav-link active " >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={faEdit}/>
                    <div className="bottom-tab-label a1">Edit company page</div>
                  </div>
                </NavLink>
                
              </NavItem>
            
        </div>
      </Nav>
    </nav>
  </div>
);

export default TabExampleSecondaryPointing;
