import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { userData } from "../../features/userSlice";
import { Descriptions, Typography, Card, Avatar } from "antd";
const { Title } = Typography;

export const ProfilePage: React.FC = () => {
  const user = useAppSelector(userData);

  return (
    <div className="centerItem">
      <Card
        style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", width: "80%", marginTop: "50px"}}
      >
        <Avatar src={user?.photo} size={100} />
        <Title level={2}>{`Welcome, ${user?.username}!`}</Title>
        <Descriptions size="small" column={1}>
          <Descriptions.Item label="Location">
            {user?.location}
          </Descriptions.Item>
          <Descriptions.Item label="Gender">{user?.gender}</Descriptions.Item>
          <Descriptions.Item label="Age">{user?.age}</Descriptions.Item>
          <Descriptions.Item label="Position">
            {user?.position}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">{user?.phone}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};