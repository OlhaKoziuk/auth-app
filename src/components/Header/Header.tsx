import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Button } from 'antd';
import { PushpinOutlined , HeartOutlined, CoffeeOutlined, UserOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { isAuthorizated, setIsAuthorizated } from '../../features/userSlice';

export const Header: React.FC = () => {
  const authorizated = useAppSelector(isAuthorizated);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setIsAuthorizated(false));
    navigate('/');
  };

  return (
    <div>
      {authorizated ? (
        <Menu mode="horizontal" theme="dark" className="menu">
          <li className="ant-menu-item">
            <NavLink
              to="/welcome"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Welcome
            </NavLink>
            <PushpinOutlined />
          </li>

          <li className="ant-menu-item">
            <NavLink
              to="/profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Profile
            </NavLink>
            <HeartOutlined />
          </li>
          <li className="ant-menu-item">
            <Button type="primary" onClick={handleLogout}>
              Log Out
            </Button>
          </li>
        </Menu>
      ) : (
        <Menu mode="horizontal" theme="dark" className="menu">
          <li className="ant-menu-item">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Main
            </NavLink>
            <CoffeeOutlined />
          </li>

          <li className="ant-menu-item">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Log In
            </NavLink>
            <UserOutlined />
          </li>
        </Menu>
      )}
    </div>
  );
};

