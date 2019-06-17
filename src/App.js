import React from "react";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable.js";
import Login from "./pages/login";
import Write from "./pages/write";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/write" component={Write} />
      </Router>
    </Provider>
  );
}

export default App;
