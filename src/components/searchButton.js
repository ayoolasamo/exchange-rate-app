import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import {FiSearch} from "react-icons/fi";

const Searchbar =()=>{
   return(
       <div >
        <FiSearch/> <input placeholder=' Search for coins,tokens,traders,etc'className='search' />
       </div>
   )

}

export default Searchbar;