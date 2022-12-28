import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const MyForm = () => {
  const onFinish = (values) => {
    alert('Coi như đăng kí đc rồi')
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    alert('Failed rồi nhập cẩn thận vào')
    console.log("Failed:", errorInfo);
  };
  
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="row p-5 d-flex"
    >
      <Form.Item  label={<span className="me-2">Username</span>} name="username" rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input className="ms-4 col-9"/>
      </Form.Item>
      <Form.Item label={<span className="me-2">Password</span>} name="password" rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password className="ms-4 col-9"/>
      </Form.Item>
      <Form.Item label={<span className="me-2">Address</span>} name="address" rules={[{ required: true, message: "Please input your address!" }]}
      >
        <Input className="ms-4 col-9"/>
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
