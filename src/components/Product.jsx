import React from 'react';
import styled from 'styled-components';
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";

const Info=styled.div`
height:100%;
width:100%;
position:absolute;
z-index:3;
top:0;
left:0;
align-content:center;
justify-content:center;
display: flex;
background-color:rgba(0,0,0,0.2);
transition:all 0.5 ease;
opacity:0;
cursor:pointer;
`;

const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
background-color: #f5fbfd;
align-items:center;
display:flex;
justify-content:center;
position:relative;

&:hover ${Info} {
    opacity:1;
}
`;
const Image=styled.img`
height:300px;
width: 300px;
z-index:2;`;
const Circle=styled.div`
height: 200px;
width:200px;
border-radius:90%;
background-color:white;
position:absolute;
`;
const Icon=styled.div`
height: 40px;
width: 40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:7px;
transition:all 0.5s ease;
&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
}
`;

const Product=({item})=>{
    return(
        <Container>
            <Circle/>
            <Image src={item.img}></Image>
            <Info>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
            </Info>
        </Container>

    );
}
export default Product;