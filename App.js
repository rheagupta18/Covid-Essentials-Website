import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { signout } from "./actions/userActions";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartScreen from "./screens/CartScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import ProductScreen from "./screens/ProductScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import SigninScreen from "./screens/SigninScreen";
import ProductsScreen from "./screens/ProductsScreen";
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div></div>
      <div className="grid-container">
        <header>
          <nav className="navbar">
            <div className="navbar-center">
              <div>
                <Link className="brand" to="/">
                  Covid-Essentials
                </Link>
              </div>
              <div>
                <Link to="/cart">
                  Cart
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )}
                </Link>
                {userInfo ? (
                  <div className="dropdown">
                    <Link to="#">
                      {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link to="#signout" onClick={signoutHandler}>
                          Sign Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to="/signin">Sign In</Link>
                )}
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/products" component={ProductsScreen} />
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
