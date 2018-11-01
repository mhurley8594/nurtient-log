import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class HeaderNav extends React.Component {
  public render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              style={{ flexGrow: 1 }}
            >
              Nutrient Log
            </Typography>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/addlog">Add Log</Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default HeaderNav;
