import React from 'react';
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you are looking for cannot be found."
      style={{maxHeight: "100vh"}}
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Go Back to Home
        </Button>
      }
    />
  );
};