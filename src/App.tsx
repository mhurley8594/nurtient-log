import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

// Component imports.
import Dashboard from "./components/Dashboard/Dashboard";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import LogEntryForm from "./components/LogEntryForm/LogEntryForm";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderNav />
          <Switch>
            <Route exact={true} path="/" component={Dashboard} />
            <Route path="/addlog" component={LogEntryForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
