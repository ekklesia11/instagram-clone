import React from "react";
import styled from "styled-components";

const InputBox = () => {
  return (
    <Container>
      <Input>
        <Title>Instagram</Title>
        <input type="text" placeholder="Phone number, username, or email" />
        <input type="text" placeholder="Password" />
        <button>Log In</button>
        <div>OR</div>
        <div>Log in with Facebook</div>
        <div>Forgot password?</div>
      </Input>
      <SignUp>
        <span>Don't have an account?</span> <span>Sign up</span>
      </SignUp>
      <AppButton>
        <div>Get the app.</div>
        <div>
          <button>App Store</button>
          <button>Google Play</button>
        </div>
      </AppButton>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 15px;
  text-align: center;
`;

const Title = styled.div`
  font-family: ${(props) => props.theme.font.logo};
  font-size: 4rem;
  margin: 22px auto 12px;
`;

const Input = styled.form`
  font-family: ${(props) => props.theme.font.normal};
  border: 1px solid #dbdbdb;
  background-color: #fff;
  width: 268px;
  height: 358px;
  padding: 10px 40px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;

  input {
    margin: 0 auto;
    width: 100%;
    height: 36px;
    margin-bottom: 5px;
    border-radius: 3px;
    border: 1px solid #dbdbdb;
    background-color: #fafafa;
    font-size: 0.8rem;
    padding-left: 8px;

    &::placeholder {
      margin-left: 5px;
    }
  }

  button {
    margin: 8px auto;
    width: 100%;
    height: 30px;
    border: none;
    color: #fff;
    font-weight: bold;
    background-color: #0095f6;
    border-radius: 5px;
  }

  div:nth-child(5) {
    margin: 10px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #8e8e8e;
  }

  div:nth-child(6) {
    margin: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #385185;
  }

  div:nth-child(7) {
    margin-top: 10px;
    font-size: 0.8rem;
    color: #00376b;
  }
`;

const SignUp = styled.div`
  font-family: ${(props) => props.theme.font.normal};
  border: 1px solid #dbdbdb;
  background-color: #fff;
  text-align: center;
  width: 348px;
  font-weight: 100;
  font-size: 0.9rem;
  padding: 20px 0;

  span:last-child {
    font-weight: 600;
  }
`;

const AppButton = styled.div`
  div:first-child {
    margin: 20px 0;
  }
`;

export default InputBox;
