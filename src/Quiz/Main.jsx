import React,{useState} from "react";
import "./recharge.css"
import "./reset.css"
import { BrowserRouter as  Router,Link, Route, Switch,Redirect,useLocation } from 'react-router-dom';

// import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header'
import Footer from "./Footer";
import Coins from "./Coins";
import Practice from "./Practice/Practice";


function Main(props) {

   console.log("dvdd");
   let location = useLocation();
  console.log(location.pathname);
  var pathh=location.pathname.substring(1);
  console.log(pathh);
 
  return (
    
    <div class="flex-container">

       <Header/>
       <Switch>
         <Route path='/practice' component={Practice}/>
          <Route exact path='/coins' component={Coins}/>
          {/* <Route exact path='/' component={People}/> */}
         </Switch>
    
        <Footer pathh={pathh}/>

    </div>

  );
}

export default Main;
