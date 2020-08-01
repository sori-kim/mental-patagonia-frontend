import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Account from "./Pages/Account/Account";
import CartMain from "./Pages/Cart/CartMain";
import EditProfile from "./Pages/Account/EditProfile";
import Main from "./Pages/Main/Main";
import Modal from "./Pages/Products/ProductDetails/Modal/Modal";
import ProductDetails from "./Pages/Products/ProductDetails/ProductsDetails";
import Products from "./Pages/Products/Products";
import React from "react";
import SignIn from "./Pages/SignIn/SignIn";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/products" component={Products} />
          <Route
            exact
            path="/products/details/:id"
            component={ProductDetails}
          />
          <Route exact path="/cart" component={CartMain} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/modal" component={Modal} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/account/profile" component={EditProfile} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
