import React from "react";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
