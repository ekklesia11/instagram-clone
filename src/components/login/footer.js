import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
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
      <div>© 2020 INSTAGRAM FROM FACEBOOK</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Footer;
