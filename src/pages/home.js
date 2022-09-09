import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Searchbar from "../components/searchButton";
import RateCards from "../components/ratecards";

export const Home =() =>{
     return(
          <div className=" col-9">
               <Searchbar/>
               <RateCards/>
          </div>
     )
};

