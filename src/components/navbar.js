import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { RiStackFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import logo from "../images/sidebar-logo.png";


//The navigationbar for the site 
export const Navbar = () => {
    return (
        <div className="" >
            <div className="header ">
                <img src={logo} alt="logo"></img>
            </div>
            {/* <button class="openbtn" >&#9776; Open Sidebar</button> */}
            <div id="menuid" className="navmenu navbar  navbar-expand-lg navbar-light  "  >
                <button className="navbar-toggler fixed-top " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                    <div className="homelink menu col-12" >
                        <NavLink exact to="/" className="navlink" activeClassName="active"  >
                            <AiTwotoneHome style={{ margin: ' 0% 7% 0% 4%', }} />
                            <span>Home</span>
                        </NavLink>
                    </div>
                    <div className="transactionlink menu col-12">
                        <NavLink to="/transaction" className="navlink" activeClassName="active">
                            <RiStackFill style={{ margin: ' 0% 7% 0% 4%', }} />
                            <span>Transactions</span>
                        </NavLink>
                    </div>
                    <div className="insightlink menu col-12 ">
                        <NavLink to="/insight" className="navlink" activeClassName="active">
                            <HiLightBulb style={{ margin: ' 0% 7% 0% 4%', }} />
                            <span>Insights</span>
                        </NavLink>
                    </div>
                    <div className="settingslink menu col-12">
                        <NavLink to="/settings" className="navlink" activeClassName="active">
                            <AiFillSetting style={{ margin: ' 0% 7% 0% 4%', }} />
                            <span>Settings</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

