import { Button, Checkbox, Form, Input, Row, Col } from "antd";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Row justify="center" style={{ marginTop: "40px", marginBottom: "65px" }}>
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
              <text className="text-white text-[36px]">Sign Up</text>
            </Row>
          </Form.Item>
          <Form.Item
            name="fullname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
                whitespace: true,
              },
            ]}
          >
            <Input
              className="h-[56px] rounded-[12px] !bg-[#0E1326] !p-[10px] border-none text-white placeholder:text-gray-400"
              placeholder="Full name"
            />
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
              placeholder="Type your email.."
              className="h-[56px] rounded-[12px] !bg-[#0E1326] !p-[10px] border-none text-white placeholder:text-gray-400"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Password"
              className="h-[56px] rounded-[12px] !bg-[#0E1326] !p-[10px] border-none text-white placeholder:text-gray-400 game_search"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-white">Remember me</Checkbox>
            </Form.Item>
            <a
              className="login-form-forgot text-white float-right underline underline-offset-1"
              href="/forgetPassword"
            >
              Forgot password
            </a>
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
              Sign Up
            </Button>
            <text className="text-white">Not registred yes? </text>
            <a
              href="/SignUp"
              class="underline underline-offset-1 ... text-blue-500"
            >
              Create an account
            </a>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;
