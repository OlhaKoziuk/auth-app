import React from 'react';
import { Result, Button } from "antd";
import { useNavigate } from 'react-router-dom';

export const Unauthorized: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Result
      status="403"
      title="Authorization Required"
      style={{ maxHeight: "100vh" }}
      subTitle="Sorry, you need to be authorized to access this page."
      extra={
        <Button type="primary" key="login" onClick={() => navigate("/login")}>
          Log in
        </Button>
      }
    />
  );
};