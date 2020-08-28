import React from "react";
import styled from "styled-components";

import iphone from "../../assets/iphone.png";
import InputBox from "./inputBox";
import Footer from "./footer";

const Login = () => {
  return (
    <Layout>
      <Container>
        <Img />
        <InputBox />
      </Container>
      <Footer />
    </Layout>
  );
};

const Layout = styled.div`
  margin-top: 100px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.div`
  background-image: url("${iphone}");
  background-size: 300px 600px;
  width: 300px;
  height: 600px;
  margin-right: 15px;
`;

export default Login;
