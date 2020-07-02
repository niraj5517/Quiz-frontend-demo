import React,{useState} from "react";

import { BrowserRouter as  Router,Link, Route, Switch,Redirect } from 'react-router-dom';


function Footer(props) {

 var path=props.pathh;
 console.log(path)
 
 
  return (
   

       
    <div class="mobFooterWrapper">
    <div class="mobFooter">
        <a href="#">
            <div class="home">
                <i class="fas fa-home"></i>
                <h1>Home</h1>
            </div>
        </a>
        <Link to='/practice'>
            <div className={`practice ${path=='practice' ? 'active' : ''}`}>
                <i class="fas fa-pencil-ruler"></i>
                <h1>Practice</h1>
            </div>
            </Link>
        <a href="#">
            <div class="mock ">
                <i class="fas fa-edit"></i>
                <h1>Mock Test</h1>
            </div>
        </a>
        <Link to='/coins'>
            <div className={`coins ${path=='coins' ? 'active' : ''}`}>
                <i class="fas fa-coins"></i>
                <h1>coins</h1>
            </div>
       </Link>
        <a href="#">
            <div class="profileFooter">
                <i class="fas fa-user-cog"></i>
                <h1>Profile</h1>
            </div>
        </a>
    </div>
</div>


  );
}

export default Footer;
