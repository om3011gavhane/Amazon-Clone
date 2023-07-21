import './App.css';
import React, {useEffect} from "react";
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51NSOINSIZpjYBfiffRTmT26EutTsGR5isvblCXF5jeleDFot8rcTOxvqN120QqlpGaukYrHfquIYuoXwXhWPcsDh00oszkRjqJ");

function App() {
  const [{}, dispatch]= useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <Header /> 
        <Home /> */}
        <Routes>
          <Route path="/login" element={[<Login />]}/>
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
          <Route path="/payment" element={[<Header />,Window.loadStripe={promise}><Payment/>]}/>
          <Route path="/" element={[<Header />,<Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
