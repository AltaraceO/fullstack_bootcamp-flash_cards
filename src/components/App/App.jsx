import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar";
import Display from "../Display";
import ManageCards from "../Manage";

class App extends React.Component {
  // state = { cards: [] };
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route exact path="/">
              <Display />
            </Route>
            <Route exact path="/manage/">
              <ManageCards />
            </Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
