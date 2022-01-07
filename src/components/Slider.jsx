import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {sliderItems} from '../data.js'

import styled from 'styled-components';
const Container=styled.div`
background-color:orange;
height:100vh;
width:100%; 
align-items:center;
justify-content:space-between;
display:flex;
position:relative;
overflow: hidden;
`;
const Arrow=styled.div`
align-items:center;
cursor: pointer;
justify-content:center;
border-radius:50%;
height:50px;
width:50px;
background-color:white;
position:absolute;
left:${props=>props.direction==='left'&&"10px"};
right:${props=>props.direction==='right'&&"10px"};

top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper=styled.div`
height:100%;
display: flex;
transition: all 1.5s ease;
transform:translateX(${(props)=>props.slideIndex * -100}vw);
`;
const ImageContainer=styled.div`
flex:1;
height:100%;
`;
const InfoContainer=styled.div`
flex:1;

padding:50px
`;
const Image=styled.img`
height:80%;

`;

const Slide=styled.div`
width: 100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${(props)=>props.bg};
`;

const Title=styled.h1`
font-size:50px;
padding:50px;
`;

const Desc=styled.p`
font-size:20px;
margin:50px,0px;
letter-spacing:3px;
padding:50px
`;

const Button=styled.button`
border-radius:30%;
cursor:pointer;
height:50px;
font-size:large;
background-color:transparent;
padding:10px;
width:125px;

`;
const Slider=()=>{
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if(direction==='left')
        {
            setSlideIndex(slideIndex>0?slideIndex-1:4);
        }
        else
        {
            setSlideIndex(slideIndex<4?slideIndex+1:0);
        }

    }
    return(
        <Container>
            <Arrow direction='left' onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(<Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image  src={item.img}></Image>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Show Now</Button>
                    </InfoContainer></Slide>
                ))}
                
                   
            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick("right")}><ArrowRightOutlined/></Arrow>
        </Container>
    );
}
export default Slider;