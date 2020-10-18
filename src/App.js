import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function App() {
  const [{basket}, dispatch]= useStateValue();
  useEffect(() =>{ const unsubscribe=
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null,
        });
      }
    });
    return() =>{
      unsubscribe();
    }
  },[]);
console.log("user >>>".user);
  return (
    <Router>
    <div className="app">
    <Switch>
      <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path="/login">
      <Login />
      </Route>
      {/*This is the default route*/}
      <Route path="/">
      <Header />
      <Home />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
