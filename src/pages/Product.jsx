import React from 'react';

import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Navbar from '../components/navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Add, Remove } from "@material-ui/icons";

const Container=styled.div`
margin:10px;`;
const ProductWrapper=styled.div`
display:flex;
margin:10px;
padding:10px;
`;
const ImageContainer=styled.div`
flex:1;

`;
const InfoContainer=styled.div`
flex:1`;
const Image=styled.img`
height:80vh;
width:80%;`;
const Desc=styled.div`
margin:20px;`;
const Title=styled.h1``;
const Price=styled.span`
font-size:30px;
padding:20px;
margin:20px;
`;
const FilterContainer=styled.div`
display:flex;

`;
const Filter=styled.div`
flex:1;
display:flex;
`;
const FilterText=styled.span`
font-size:20px;
padding:10px;`;
const FilterSelect=styled.select`
padding:10px;`;
const FilterOption=styled.option``;

const FilterColor=styled.div`
height:20px;
width: 20px;
border-radius:50%;
background-color:${(props)=>props.color};
margin:10px;
;`;

const FilterSize=styled.div`
align-items:flex-start;
flex:1`;
const AddContainer=styled.div`
display:flex;
padding:20px;

`;

const QuantityContainer=styled.div`
margin:20px;
padding:10px;
display:flex;
justify-content:space-between;
align-items:center;
`;

const Quantity=styled.span`
border:solid 2px lightblue;
width:40px;
height:40px;
border-radius:10px;`;

const AddCart=styled.button`

border:green 3px solid;
width:250px;
border-radius:10px;`;



const Product=()=>{
    return(
        <Container>
            <Navbar/>
            <Announcements/>
            <ProductWrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImageContainer>
             <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</Desc>
            <Price> $20</Price>
            <FilterContainer>
                <Filter>
                <FilterText>Color
                </FilterText>
          
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
               
                </Filter>
                <FilterSize>
                <FilterText>Size
                </FilterText>
                <FilterSelect>
                <FilterOption >XS</FilterOption>
                <FilterOption >S</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>L</FilterOption>
                <FilterOption>XL</FilterOption>
                </FilterSelect>
                </FilterSize>
            </FilterContainer>
          
            <AddContainer>
            <QuantityContainer>
            <Remove/>
            <Quantity>1</Quantity>
            <Add/>
            </QuantityContainer>
            <AddCart>ADD TO CART</AddCart>
            </AddContainer>
            
            </InfoContainer>

            </ProductWrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    );
}
export default Product;