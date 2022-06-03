import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import {sliderItems} from "../../data"
import "./Slide.css"
const Container = styled.div`
   width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin:auto;
  cursor: pointer;
  z-index:2;
  opacity:0.7;
`;
const Wrapper= styled.div`
height: 100%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${(props)=>props.slideIndex * -100}vw);
`
const Slide= styled.div`
height:100vh;
width: 100vw;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`
const ImgContainer = styled.div`
    flex:1;
   height: 100%;
`
const Image = styled.img`
    height:80%;
`


const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;



const Slider = () => {
    const[slideIndex,setSlideIndex]= useState(0)
   const handleslide =(direction)=>{
       if(direction==="left"){
           setSlideIndex(slideIndex>0?slideIndex-1:2)
       }else{
        setSlideIndex(slideIndex<2?slideIndex+1:0)
       }
   }
   setTimeout(() => {
     handleslide("right")
   }, 5000);
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleslide("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item=>(

              <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src= {item.img}/>
              </ImgContainer>
              <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  
                  <button className="btn">Show Now</button>
                  
              </InfoContainer>
          </Slide>
              ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleslide("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
