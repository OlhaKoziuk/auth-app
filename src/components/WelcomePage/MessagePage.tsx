import React from 'react';
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import { useAppSelector } from '../../app/hooks';
import { userData } from '../../features/userSlice';

const { Title, Paragraph } = Typography;

export const WelcomePage: React.FC = () => {
  const user = useAppSelector(userData);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Title
        level={2}
      >{`Welcome to Our Awesome Website, ${user?.username}!`}</Title>
      <Paragraph>
        {`How are you doing? What's the weather like in your city ${user?.location}?`}
      </Paragraph>
      <Button type="primary" size="large">
        <Link to="/profile">View Your Profile</Link>
      </Button>
    </div>
  );
};