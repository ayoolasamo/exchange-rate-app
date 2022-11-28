import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import trademarklogo from "../images/trademarklogo.png";
import {CgArrowLongRight} from "react-icons/cg"

const Trademark =()=>{
    return(
        <div className="trademark-container mx-3 col-5 col-lg-2 col-md-2">
            <img className="trademarklogo w-50" src={trademarklogo} alt="logo"></img><br/>
            <p>simple crypto trading platform for everyone</p>
            <a className="learnmore" style={{textDecoration:"none"}}>Learn more 
                <CgArrowLongRight className="arrow" style={{strokeWidth:"0", fontSize:"20px", marginLeft:"10%"}}/> 
            </a>
        </div>
    )
}

export default Trademark;