import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import axios from "axios";
import math from "mathjs";

const ratesurl = "https://api.coindesk.com/v1/bpi/currentprice.json";


const RateCards = () =>{
    const formatCash = n => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
      };

    const [api ,setapi]= React.useState(null);
    let content = null;

    React.useEffect(()=>{
        axios.get(ratesurl)
            .then(response=>{
                setapi(response.data);
        });
    },[ratesurl]);
   
    if(api){
        content =
            <div className="ratecards-container row  ">
                <div className="usdcard card col-md-3  col-xs-5">
                    <span className="usdlabel cardlabel"> {api.bpi.USD.code}</span>
                    <span className="usdrate cardrate">$ {formatCash(parseInt((api.bpi.USD.rate).replace(/,/g, "")))}</span>
                    </div>
                <div className="gbpcard card col-md-3 col-xs-5"> 
                    <span className="gbplabel cardlabel">{api.bpi.GBP.code}</span>
                    <span className="gbprate cardrate">£ {formatCash(parseInt((api.bpi.GBP.rate).replace(/,/g,"")))}</span>
                </div>
                <div className="eurcard card col-md-3 col-xs-5"> 
                    <span className="eurlabel cardlabel"> {api.bpi.EUR.code}</span>
                    <span className="eurrate cardrate">€ {formatCash(parseInt((api.bpi.EUR.rate).replace(/,/g,"")))}</span>
                </div>
    
            </div>
        
    }
    return(
        <div>
            {content}
        </div>
    )
}
export default RateCards;