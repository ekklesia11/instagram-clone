import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Links>
        <div>ABOUT</div>
        <div>HELP</div>
        <div>PRESS</div>
        <div>API</div>
        <div>JOBS</div>
        <div>PRIVACY</div>
        <div>TERMS</div>
        <div>LOCATIONS</div>
        <div>TOP ACCOUNTS</div>
        <div>HASHTAGS</div>
        <div>LANGUAGE</div>
      </Links>
      <Copyright>© 2020 INSTAGRAM FROM FACEBOOK</Copyright>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 38px 0;
  font-family: ${(props) => props.theme.font.normal};
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 600;
`;

const Copyright = styled.div`
  font-weight: 600;
  color: #8e8e8e;
`;

export default Footer;
