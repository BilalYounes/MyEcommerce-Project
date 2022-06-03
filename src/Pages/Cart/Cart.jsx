import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import CartItem from "./CartItem";
import { Cartiteme } from "../../data";
import { useState } from "react";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border-radius:20px;
  cursor: pointer;
  border:none;
  /* border: ${(props) => props.type === "filled" && "none"}; */
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "teal"};
  color: white;
`;

const TopTexts = styled.div`
 
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
 
`;

const Info = styled.div`
    margin-right: 20px;

  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
`;
const Cart = ({cartItems,onAdd,onRemove}) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice ;
  return (
    <Container>
      {/* <Navbar/> */}
      <Announcement/>
      <Wrapper>
        <Top>
      <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cartItems.map(item=>(
                 <CartItem onRemove={onRemove} onAdd={onAdd}  item={item}/>
              ))}
            
            </Info>
            <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>All We Take</SummaryItemText>
              <SummaryItemPrice>14%</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Price </SummaryItemText>
              <SummaryItemPrice>{itemsPrice }</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Tax</SummaryItemText>
              <SummaryItemPrice>{taxPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
          </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart