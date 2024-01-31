import React from 'react';
import { Button, Typography } from "antd";
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
      navigate("/login");
  };
  
  return (
    <div
      style={{
        padding: "50px",
        color: "white",
        textAlign: "center",
      }}
    >
      <Title
        level={2}
        style={{ marginBottom: "50px" }}
      >
        Welcome to our awesome website!
      </Title>

      <Button type="primary" size="large" onClick={handleLoginClick}>
        Log In
      </Button>
    </div>
  );
};