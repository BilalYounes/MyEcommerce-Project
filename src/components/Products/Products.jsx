import styled from "styled-components";
import {popularProducts} from "../../data";
import Product from "./Product"
import Slide from 'react-reveal/Slide';
import { useState } from "react";
const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  padding: 20px;
  justify-content: space-between;
`;
const Products = ({onAdd}) => {
  const[cartItem,setCartItem]= useState([])

  
  return (
  <Container>
            <Slide bottom>
      {popularProducts.map(item=>(
          <Product onAdd={onAdd} item={item} key={item.id}/>
      ))}
      </Slide>
  </Container>
)};

export default Products;
