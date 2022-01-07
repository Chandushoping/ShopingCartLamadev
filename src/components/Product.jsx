import React from 'react';
import styled from 'styled-components';
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
const Container=styled.div`
flex:1;
margin:5px;
background-color: #f5fbfd;
align-items:center;
display:flex;
`;
const Image=styled.img`
height:300px;
width: 300px;
z-index:2;`;
const Circle=styled.div`
height: 200px;
width:200px;
border-radius:90%;
background-color:lightgrey;
position:absolute;
`;
const Icon=styled.div``;
const Info=styled.div`
height:100%;
width:100%;
position:absolute;
background-color:white;
z-index:5;
top:0;
left:0;`;

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