import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import axios from "axios";

const ratesurl = "https://api.coindesk.com/v1/bpi/currentprice.json";

const RateCards = () =>{

    const [api ,setapi]= React.useState(null);
    let content = null;

    React.useEffect(()=>{
        axios.get(ratesurl)
            .then(response=>{
                setapi(response.data);
        });
    },[ratesurl]);
   
    if(api){
        return(
            <div className="ratecards-container row">
                <div className="usdcard card col-3">
                    <span className="usdlabel cardlabel"> {api.bpi.USD.code}</span>
                    <span className="usdrate cardrate">$ {api.bpi.USD.rate}</span>
                    </div>
                <div className="gbpcard card col-3"> 
                    <span className="gbplabel cardlabel">{api.bpi.GBP.code}</span>
                    <span className="gbprate cardrate">£ {api.bpi.GBP.rate}</span>
                </div>
                <div className="eurcard card col-3"> 
                    <span className="eurlabel cardlabel"> {api.bpi.EUR.code}</span>
                    <span className="eurrate cardrate">€ {api.bpi.EUR.rate}</span>
                </div>
    
            </div>
        )
    }
   
}
export default RateCards;