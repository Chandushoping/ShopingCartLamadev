import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
  width: 100vw;
  height: 100vh;
  background-size:cover;
  display:flex;
  align-content:center;
  justify-content:center;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;`;
const Wrapper=styled.div`
background-color:white;
width:25%;
height:50%;
border-radius:10px;
padding:20px;

`;
const Form=styled.form`
display:flex;
flex-direction:column;
padding:20px;`;

const Title=styled.h3``;
const Input=styled.input`
margin:10px;`;
const Button=styled.button`
padding:10px;
background-color:teal;`;
const Link=styled.a`
cursor:pointer;
padding:10px;`;



const Login=()=>{
    return(
        <Container>
            <Wrapper>
                <Form>
                <Title>
                    SIGN IN
                </Title>
                <Input placeholder='username'/>
                <Input placeholder='password'/>
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD</Link>
                <Link>CREATE NEW ACCOUNT </Link>
                </Form>
            </Wrapper>
        </Container>
    );
}
export default Login;