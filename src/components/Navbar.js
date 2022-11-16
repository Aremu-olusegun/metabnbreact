import React from "react";
import brandLogo from "../assets/MetabnbLogo.png";
import hamburger from '../assets/hamburger-menu-svgrepo-com.svg'
import { Link } from "react-router-dom";

export default function Navbar({showModal, setShowModal}) {
  console.log(showModal, setShowModal)
  return (
    <div className="navbar">
      <div>
        <img src={brandLogo} alt="brandlogo" className="brandlogo" />
      </div>
      <div className="links">
        <Link to="/" style={{ cursor: "pointer" }} className="point">
          Home
        </Link>
        <Link to="/Placetostay" className="point">Place to stay</Link> 
        <a href="vev">NFTs</a>
        <a href="vev">Community</a>
      </div>
      <div>
        <img alt="hamburger" src={hamburger} className="menuburger"/>
      </div>
      <button className="connectbutton" onClick={() => setShowModal(!showModal)}>
        Connect wallet
      </button>
    </div>
  );
}
