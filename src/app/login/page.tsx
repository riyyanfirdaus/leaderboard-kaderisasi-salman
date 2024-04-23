"use client";
import { Form, Input, Flex, Typography, Button } from "antd";

export default function Login() {
  const { Title, Text } = Typography;

  const handleSubmit = (): void => {
    console.log("ok");
  };
  return (
    <Flex vertical align="center" justify="center" style={{height: '75vh'}}>
      <Title level={1} style={{ color: "#1D566D"}}>
        Login
      </Title>
      <Text style={{ color: "#1D566D", fontSize: "18px" }}>
        Akun leaderboard sama dengan akun kaderisasi BMKA. Silakan masukkan akun
        kaderisasi anda!
      </Text>
      <Form
        style={{
          width: "30vw",
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "15px",
          marginTop: "25px",
        }}
        onSubmitCapture={handleSubmit}
      >
        <Form.Item>
          <Input type="email" size="large" placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Input type="password" size="large" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "100%" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
}
