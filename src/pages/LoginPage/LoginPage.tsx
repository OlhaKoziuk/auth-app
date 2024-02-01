import React from 'react';
import { Form, Input, Button, Typography, Modal } from "antd";
import { useAppDispatch } from '../../app/hooks';
import { getAuthUser, setIsAuthorizated, setUser } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  const onFinish = async (values: { username: string; password: string }) => {
    const user = await dispatch(getAuthUser());
    const authUser = user.payload;
      if (
        values.username === authUser?.username &&
        values.password === authUser.password
      ) {
        navigate("/welcome");
        dispatch(setUser(values));
        dispatch(setIsAuthorizated(true));
      } else {
        Modal.error({
          title: "Error",
          content:
            "User does not exist or incorrect username/password. Please enter valid credentials",
        });
      }
  };

  return (
    <section className="centerItem">
      <div style={{ textAlign: "center" }}>
        <Title level={2}>Authorization</Title>
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
    </section>
  );
};