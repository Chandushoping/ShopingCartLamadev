import React from 'react';
import styled from 'styled-components';
import { Send } from "@material-ui/icons";
const Container=styled.div`
height:60vh;
background-color:#fcf5f5;
margin:10px;
align-content:center;
justify-content:center;
position:relative;
`;
const Wrapper=styled.div`
top:40%;
left:35%;
position:absolute;
padding:10px;
`;
const Title=styled.h1`
font-size:35px;`;
const Info=styled.div`
font-size:15px;
`;
const InputContainer=styled.div`
display:flex;
padding:20px;
left:25%;
position:absolute;
width:50%;`;

const Input=styled.input`
`;

const Button=styled.button`
background-color:lightgreen`;

const NewsLetter=()=>{
return(
    <Container>
        <Wrapper>
        <Title>
            News Letter
        </Title>
        <Info>Get timely updates from your favorite products.</Info>
        <InputContainer>
        <Input placeholder='Your Email'></Input>
        <Button><Send/></Button></InputContainer></Wrapper>
    </Container>
);
}
export default NewsLetter;