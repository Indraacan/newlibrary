import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Libraries from "./components/Libraries";
import Students from './components/Students';

import Navbar from "./components/Navbar";
import Home from './components/Home/Form'
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <div className="mt-4">
            <Switch>
            
              <Route path="/libraries">
                <Libraries />
              </Route>
              <Route path="/students">
                <Students />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
