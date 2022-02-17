import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import {Link} from "react-router-dom"
import {AiTwotoneHome} from "react-icons/ai";
import {RiStackFill} from "react-icons/ri";
import {HiLightBulb} from "react-icons/hi";
import {AiFillSetting} from "react-icons/ai";
import logo from "../images/sidebar-logo.png";


export const Navbar = () => {
    return( 
        <div >
            <div className="header">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="navmenu">
                <div className="homelink menu" >
                    <Link to="/">
                        <AiTwotoneHome style={{marginRight:'11%',}}/>
                        <span>Home</span>
                    </Link>
                </div>
                <div className="transactionlink menu">
                    <Link to="/transaction">
                        <RiStackFill style={{marginRight:'11%',}}/>
                        <span>Transactions</span>
                    </Link>
                </div>
                <div className="insightlink menu">
                    <Link to="/insight">
                        <HiLightBulb style={{marginRight:'11%',}}/>
                        <span>Insights</span>
                    </Link>
                </div>
                <div className="settingslink menu">
                    <Link to="/settings">
                        <AiFillSetting style={{marginRight:'11%',}}/>
                        <span>Settings</span>
                    </Link>
                </div>
            </div>
        </div>     
    );
};

