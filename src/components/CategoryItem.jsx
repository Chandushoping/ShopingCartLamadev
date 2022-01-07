import React from 'react';
import styled from 'styled-components';


const Container=styled.div`
flex:1;
margin:3px;
position:relative;
height: 70vh;
`;
const Image=styled.img`
height:100%;
width:100%;
object-fit:cover;
`;
const Info=styled.div`
position:absolute;
align-items:center;
justify-content:center;
top:0;
bottom: 0;
height: 100%;
width: 100%;
display:flex;
flex-direction:column;
`;
const Title=styled.h1`
font-size:30px`;
const Button=styled.button`
border:none;
padding:10px;
border-radius:25%`;

const CategoryItem=({item})=>{
   
    return(
    <Container>
    <Image src={item.img}>
    </Image>
    <Info>
    <Title>{item.title}</Title>
    <Button>Shop Now</Button>
    </Info>
    
    </Container>
    );
}
export default CategoryItem;