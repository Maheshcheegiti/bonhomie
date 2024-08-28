import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import BrandLogoPrimary from "../../assets/logos/BrandLogoPrimary.svg";
import  BagIcon  from "../../assets/icons/bagicon.svg";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/boys">Boys</NavLink>
          </li>
          <li>
            <NavLink to="/girls">Girls</NavLink>
          </li>
          <li>
            <NavLink to="/newborn">New Born</NavLink>
          </li>
        </ul>
      </div>
      <div className="logo">
        <NavLink to="/">
          <img src={BrandLogoPrimary} alt="Bonhomie Logo" />
        </NavLink>
      </div>
      <div className="right">
        <ul>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQs</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <img src={BagIcon} alt="Cart" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
