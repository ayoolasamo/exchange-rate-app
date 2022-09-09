import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { NavLink } from "react-router-dom";
import {AiTwotoneHome} from "react-icons/ai";
import {RiStackFill} from "react-icons/ri";
import {HiLightBulb} from "react-icons/hi";
import {AiFillSetting} from "react-icons/ai";
import logo from "../images/sidebar-logo.png";


//The navigationbar for the site 
export const Navbar = () => {
    return( 
        <div >
            <div className="header">
                <img src={logo} alt="logo"></img>
            </div>
            {/* <button class="openbtn" >&#9776; Open Sidebar</button> */}
            <div  id= "menuid" className="navmenu  " >
                <div className="homelink menu" >
                    <NavLink exact to="/" className="navlink" activeClassName="active"  >
                        <AiTwotoneHome style={{margin:' 0% 7% 0% 4%',}}/>
                        <span>Home</span>
                    </NavLink>
                </div>
                <div className="transactionlink menu">
                    <NavLink to="/transaction" className="navlink" activeClassName="active">
                        <RiStackFill style={{margin:' 0% 7% 0% 4%',}}/>
                        <span>Transactions</span>
                    </NavLink>
                </div>
                <div className="insightlink menu">
                    <NavLink to="/insight" className="navlink" activeClassName="active">
                        <HiLightBulb style={{margin:' 0% 7% 0% 4%',}}/>
                        <span>Insights</span>
                    </NavLink>
                </div>
                <div className="settingslink menu">
                    <NavLink to="/settings" className="navlink" activeClassName="active">
                        <AiFillSetting style={{margin:' 0% 7% 0% 4%',}}/>
                        <span>Settings</span>
                    </NavLink>
                </div>
            </div>
        </div>     
    );
};

