import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./components/LoginForm";
import Users from './components/Users'

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={LoginForm}></Route>
      <Route exact path='/users' component={Users}></Route>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
<Router>
  <App />
</Router>, rootElement);
