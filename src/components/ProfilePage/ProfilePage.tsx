import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { login, password, userData } from '../../features/userSlice';
import { Descriptions, Typography, Card, Avatar, Result, Button } from "antd";
const { Title, Paragraph } = Typography;

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector(userData);
  const userLogin = useAppSelector(login);
  const userPass = useAppSelector(password);
  const invisible = !userLogin || !userPass
    || user?.username !== userLogin || user.password !== userPass;
 
 useEffect(() => {
   const delay = 2000;
   
   const timeoutId = setTimeout(() => {
     if (invisible)  {
       navigate("/login");
     }
   }, delay);

  
   return () => clearTimeout(timeoutId);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);


  return (
    <div>
      {invisible ? (
        <Result
          status="403"
          title="Authorization Required"
          subTitle="Sorry, you need to be authorized to access this page."
          extra={
            <Button type="primary" key="login" onClick={() => navigate("/login")}>
              Log in
            </Button>
          }
        />
      ) : (
        <>
          <Card>
            <Avatar src={user?.photo} size={100} />
            <Title level={2}>{`Welcome, ${user?.username}!`}</Title>
            <Descriptions size="small" column={1}>
              <Descriptions.Item label="Location">
                {user?.location}
              </Descriptions.Item>
              <Descriptions.Item label="Gender">{user?.gender}</Descriptions.Item>
              <Descriptions.Item label="Age">{user?.age}</Descriptions.Item>
              <Descriptions.Item label="Occupation">
                {user?.occupation}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card style={{ marginTop: "20px" }}>
            <Title level={4}>Additional Information</Title>
            <Paragraph>{user?.additionalInfo}</Paragraph>
          </Card>
        </>
      )}
    </div>
  );
};