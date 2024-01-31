import React, { useEffect } from 'react';
import { Form, Input, Button, Typography, Modal } from "antd";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAuthUser, setUser, userData } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authUser = useAppSelector(userData);
 
  useEffect(() => {
    if (!authUser) {
      dispatch(getAuthUser());
    }  
  }, [authUser, dispatch]);

  const onFinish = (values: { username: string; password: string }) => {
    dispatch(setUser(values));
    
      if (
        values.username === authUser?.username &&
        values.password === authUser.password
      ) {
        navigate("/welcome");
      } else {
        Modal.error({
          title: "Error",
          content:
            "User does not exist or incorrect username/password. Please enter valid credentials",
        });
      }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <Title level={2}>Log In</Title>
      <Form
        name="loginForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ maxWidth: "300px", margin: "auto" }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};