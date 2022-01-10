import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
height:95vh;
width:100%;
align-items:center;
padding:20px;
display:flex;
align-content:center;
justify-content:center;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;`
      ;
const Wrapper=styled.div`
background-color:white;
padding:10px;
height:500px;
width:30%;
border-radius:20px;
margin:10px;
`;
const Title=styled.h1`
margin:20px;

font-size:30px`;
const Input=styled.input`
padding:10px;
margin:10px;
width:180px;`;
const Form=styled.form``;
const Agreement=styled.div`
padding:20px;`;
const Button=styled.button`
background-color:teal;
width:250px;
font-size:20px;
padding:7px;
color:white;
border-radius:10px;`;
const Register=()=>{
    return(
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
            <Form>
            <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
          By creating an account, I consent to the processing of my personal
            data in accordance with the <b>Privacy Policy</b>
          </Agreement>
          <Button>CREATE</Button>
            </Form></Wrapper>
        </Container>
    );
}
export default Register;