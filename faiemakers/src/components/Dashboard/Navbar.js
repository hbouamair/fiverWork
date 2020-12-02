import React from "react";
import { Tab } from "semantic-ui-react";
import "./Navbar.css";
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
    
  }
];

const TabExampleSecondaryPointing = () => (
  <div className="nav-cont ">
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
  </div>
);

export default TabExampleSecondaryPointing;
