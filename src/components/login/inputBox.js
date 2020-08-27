import React from "react";
import styled from "styled-components";

const InputBox = () => {
  return (
    <Container>
      <Input>
        <Title>Instagram</Title>
        <input type="text" placeholder="Phone number, username, or email" />
        <input type="text" placeholder="Password" />
        <input type="submit" value="Log In" />
        <div>OR</div>
        <div>Log in with Facebook</div>
        <div>Forgot password?</div>
      </Input>
      <SignUp>
        <span>Don't have an account?</span> <span>Sign up</span>
      </SignUp>
      <div>Get the app.</div>
      <div>
        <button>App Store</button>
        <button>Google Play</button>
      </div>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.div`
  font-family: ${(props) => props.theme.font.logo};
  font-size: 4rem;
  margin: 22px auto 12px;
`;

const Input = styled.form`
  font-family: ${(props) => props.theme.font.normal};
  border: 1px solid #ccc;
  background-color: #fff;
  width: 348px;
  height: 358px;
  padding: 10px 0;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const SignUp = styled.div`
  font-family: ${(props) => props.theme.font.normal};
  border: 1px solid #ccc;
  background-color: #fff;
  text-align: center;
  width: 348px;
`;

export default InputBox;
