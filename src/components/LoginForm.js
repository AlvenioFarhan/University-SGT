"use client";

import { Form, Input, Button, Checkbox } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    console.log("Success:", values);
    const { username, password } = values;
    if (username === "admin" && password === "password") {
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        maxWidth: 300,
        margin: "auto",
        padding: "50px",
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "black", marginBottom: "25px" }}>LOGIN</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
