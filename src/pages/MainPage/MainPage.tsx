import React from 'react';
import { Button, Typography } from "antd";
import { useNavigate } from 'react-router-dom';
import { FireOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;


export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
      navigate("/login");
  };
  
  return (
    <section className="centerItem">
      <div
        style={{
          padding: "50px",
          color: "white",
          textAlign: "center",
        }}
      >
        <Title level={2} style={{ marginBottom: "50px" }}>
          Welcome to our awesome website!
          <FireOutlined />
        </Title>

        <Paragraph style={{ marginBottom: "50px" }}>
          Discover exciting features after registration! Explore your profile,
          navigate through the site, and much more.
        </Paragraph>

        <Button type="primary" size="large" onClick={handleLoginClick}>
          Log In
        </Button>
      </div>
    </section>
  );
};