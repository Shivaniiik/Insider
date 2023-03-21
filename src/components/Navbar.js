import React from "react";
//import { UserOutlined } from "@ant-design/icons";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-logo" style={{position:"absolute"}}>
            <img src="logo.png" alt="Logo" width="120" height="30" ></img>
          </div>
          <form className="d-flex">
            <div style={{marginLeft:'80px', display: 'flex'}}>
            <div className="txt">Events in Mumbai</div>
            <div className="txt1">Online Events</div>  
            <button className="btn1">Corporate Events</button>
            <button className="btn2">List your event</button>
            <button className="btn3">We are hiring!</button>
            <div className="image"><img src="person-lines-fill.svg" alt="" width='30px' height='30px' color="white"/></div>
            <div className="image"><img src="person-fill.svg" alt="" width='30px' height='30px'/></div>
            <div className="image"><img src="search.svg" alt=""width='20px' height='20px'/></div>
            <div className="image1"><img src="geo-alt.svg" alt="" width='20px' height='20px'/>Mumbai</div>
  </div>
          </form>
        </div>
      </nav>
    </>
  );
}
