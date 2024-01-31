import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu } from 'antd';


export const Header: React.FC = () => {
   const location = useLocation();
  return (
    <Menu mode="horizontal" theme="dark">
      <li
        className={`ant-menu-item ${
          location.pathname === "/" ? "ant-menu-item-selected" : ""
        }`}
      >
        <Link to="/">Main</Link>
      </li>
      <li
        className={`ant-menu-item ${
          location.pathname === "/login" ? "ant-menu-item-selected" : ""
        }`}
      >
        <Link to="/login">LogIn</Link>
      </li>
      <li
        className={`ant-menu-item ${
          location.pathname === "/profile" ? "ant-menu-item-selected" : ""
        }`}
      >
        <Link to="/profile">Profile</Link>
      </li>
    </Menu>
  );
};