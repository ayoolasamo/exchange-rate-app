import React from 'react';
import { Navbar } from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Trademark from './trademark';


export const Sidebar = () => {
  return (
    <div className='col-lg-3  '>
        <Navbar/>
        {/* <Trademark/> */}
    </div>
    
  )
}

