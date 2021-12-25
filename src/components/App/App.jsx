import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar";
import DisplayCard from "../DisplayCard";
import ManageCards from "../Manage";

class App extends React.Component {
  state = { cards: [] };
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route exact path="/">
              <DisplayCard />
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
