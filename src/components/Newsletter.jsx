import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf5f5;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  justify-content: space-between;
  border: 1px solid lightgray;
  background-color: white;
`;
const Input = styled.input`

  flex: 8;
  border: none;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  background-color:teal;
  border: none;
  color: white;
  cursor: pointer;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
