import Badge from '@mui/material/Badge';import { Search, ShopOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from 'react';

import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 60px; 
  background-color:indigo;
  color:white;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SerachContainer = styled.div`
  border: 0.5px solid teal;
  border-radius:30px;
  background-color:white;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  color:blcak;
  border-radius:30px;
  background-color:white;
  `
const Center = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
`;
const Logo = styled.h1`
  font-weight: bold;
  /* font-family: 'Source Sans Pro', sans-serif; */
  font-family: 'Aclonica', sans-serif;
/* font-family: 'Source Sans Pro', sans-serif; */
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Menuitems=styled.div`
 font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
const Navbar = ({cartItems}) => {
  // const [countB,setCountB]=useState(count)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <Link to={"/productList"}>
           <SerachContainer>
            <Input input placeholder="search..." />
            
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SerachContainer>
          </Link>
        </Left>
        <Center>
          <Link to={"/"}>
          <Logo >OneForAll.</Logo>
          </Link>
        </Center>
        <Right>
            <Menuitems>REGISTER</Menuitems>
            <Menuitems>SIGN IN</Menuitems>
            <Menuitems>
            <Link to={"/cart"}>
            <Badge badgeContent={cartItems.length} color="primary">
                <ShoppingCartOutlined/>
            </Badge>
            </Link>
            </Menuitems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
