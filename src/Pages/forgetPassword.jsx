import { Button, Form, Input, Row, Col } from "antd";

const ForgetPassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Row
      justify="center"
      style={{
        marginTop: "96px",
        paddingBottom: "225px",
      }}
    >
      <Col span={6}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item>
            <Row justify={"center"}>
              <text className="text-white text-[36px]">Forgot password?</text>
            </Row>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              className="h-[56px] rounded-[12px] !bg-[#0E1326] !p-[10px] border-none text-white placeholder:text-gray-400"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              style={{
                backgroundColor: "#3882F2",
                width: "100%",
                height: "56px",
                borderRadius: "12px",
              }}
              htmlType="submit"
              className="login-form-button"
            >
              Reset Password
            </Button>
            <div className="pt-[16px]">
              <text className="text-white">Back to </text>
              <a
                href="/LogIn"
                class="underline underline-offset-1 ... text-blue-500"
              >
                Login
              </a>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ForgetPassword;
