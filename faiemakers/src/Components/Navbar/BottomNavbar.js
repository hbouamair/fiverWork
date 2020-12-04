import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import "./Navbar.css";

const useStyles = makeStyles({
  root: {
    width: 500,
    maxWidth:'100%',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className="bottom-nav">
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="recents"  />
      <BottomNavigationAction label="Favorites" value="favorites"  />
      <BottomNavigationAction label="Nearby" value="nearby" />
      <BottomNavigationAction label="Folder" value="folder"  />
    </BottomNavigation>
    </div>
  );
}