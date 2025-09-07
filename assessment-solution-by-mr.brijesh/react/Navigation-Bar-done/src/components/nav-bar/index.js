import React, { useState }  from "react";
import "./index.css";

export default function NavBar() {
        const [page,setPage]=useState('Home');
  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <a onClick={()=>setPage('Home')}>Home</a>
          <a onClick={()=>setPage('News')}>News</a>
          <a onClick={()=>setPage('Contact')}>Contact</a>
          <a onClick={()=>setPage('About')}>About</a>
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
         {
            page==='Home' &&  <span>HOME PAGE</span> 
            ||
            page==='News' &&  <span>NEWS PAGE</span> 
            ||
            page==='Contact' &&  <span>CONTACT PAGE</span> 
            ||
            page==='About' &&  <span>ABOUT PAGE</span> 
         }
        </section>
      </div>
    </div>
  );
}