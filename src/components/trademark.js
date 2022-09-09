import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import trademarklogo from "../images/trademarklogo.png";
import {CgArrowLongRight} from "react-icons/cg"

const Trademark =()=>{
    return(
        <div className="trademark-container">
            <img className="trademarklogo" src={trademarklogo} alt="logo"></img><br/>
            <span>simple crypto trading platform for everyone</span><br/><br/>
            <span className="learnmore">Learn more 
                <CgArrowLongRight className="arrow" style={{strokeWidth:"0", fontSize:"20px", marginLeft:"10%"}}/> 
            </span>
        </div>
    )
}

export default Trademark;