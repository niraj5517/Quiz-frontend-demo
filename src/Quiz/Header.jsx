import React,{useState} from "react";
import { BrowserRouter as  Router,Link, Route, Switch,Redirect } from 'react-router-dom';


function Header() {

 
 
 
  return (
   

        <div class="headerWrapper">
            <div class="header">
                <div class="search">
                    <form action="">
                        <input type="search"/>
                        <i class="fa fa-search"></i>
                    </form>
                </div>

                <div class="home active toggle">
                    <a href="#">
                        <i class="fas fa-home margin"></i>
                        <h1>Home</h1>
                    </a>
                </div>
                <div class="practice toggle">
                   <Link to='/practice'>
                        <i class="fas fa-pencil-ruler margin"></i>
                        <h1>Practice</h1>
                  </Link>
                </div>
                <div class="mock toggle">
                    <a href="#">
                        <i class="fas fa-edit margin"></i>
                        <h1>Mock Test</h1>
                    </a>
                </div>
                <div class="coins toggle">
                    <Link to='/coins'>
                        <i class="fas fa-coins margin"></i>
                        <h1>Coins</h1>
                        </Link>
                </div>
                <div class="profileFooter toggle">
                    <a href="#">
                        <i class="fas fa-user-cog margin"></i>
                        <h1>Profile</h1>
                    </a>
                </div>


                <div class="headerMid">
                    <div class="name">
                        <h1>Apna Study</h1>
                    </div>
                    <div class="level">
                        <h2>Level 5</h2>
                    </div>
                </div>

                <div class="profile">
                    <i class="fas fa-user"></i>
                </div>
            </div>
        </div>



  );
}

export default Header;
