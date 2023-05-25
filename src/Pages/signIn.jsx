import { Button, Form, Input, Row, Col } from "antd";
import CustomCheckBox from "../Components/CustomCheckBox";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Row justify="center" style={{ marginTop: "40px", marginBottom: "145px" }}>
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
              <text className="text-white text-[36px]">Log in</text>
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
              <CustomCheckBox className="text-white">
                Remember me
              </CustomCheckBox>
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
              Log in
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

export default SignIn;
