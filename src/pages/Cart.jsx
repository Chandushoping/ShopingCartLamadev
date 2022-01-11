import React from 'react';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';  
import { Add, Remove, SlowMotionVideoOutlined } from "@material-ui/icons";
const Container=styled.div``;
const Wrapper=styled.div`
padding:20px;`;
const Title=styled.h2`
 `;
const Heading=styled.div`
display:flex;
justify-content:space-between;
padding:10px;
margin:10px;`;
const TopButton=styled.button`
padding:10px;
background-color:${(props)=>props.bg};
color:${(props)=>props.color};
`;
const TopText=styled.span`
text-decoration:underline;
cursor: pointer;
margin:0px,10px`;

const CheckingButton=styled.button``;
const ProductOutline=styled.div`
display:flex;
flex-direction:column;`;
const ProductContainer=styled.div`
display: flex;
  justify-content: space-between;
  width:100%;
  flex:2;`;
  
const Product=styled.div`
display:flex;
;`;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
const Image=styled.img`
height:200px;
width:250px;
margin:10px;`;
const ProductInfo=styled.div`
 padding:40px;
 margin:20px;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:flex-start;
  `
;
const ProductWrapper=styled.div`
display:flex;
flex:2;`

const ProductTitle=styled.div``;
const ProductId=styled.div``;
const Color=styled.div`
height:20px;
width:20px;
border-radius:50%;
background-color:black;`;
const ProductSize=styled.div``;
const QtyContainer=styled.div`display:flex;
align-items:center;
justify-content:center;
padding:10px;
margin:20px;`;
const AmountContainer=styled.div`
display:flex;
flex-direction:column;
padding:20px`;

const QtyLabel=styled.div``;
const Amount=styled.div``;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart=()=>{
return(
    <Container>
        <Wrapper>
            <Navbar/>
            <Announcements/>
            <Title>YOUR BAG</Title>
            <Heading>
                <TopButton bg='white' color='black'>CONTINUE SHOPPING</TopButton>
                <TopText>Shopping Bag(2)</TopText> 
                <TopText>Your Wishlist(0)</TopText> 
                <TopButton  bg='black' color='white'>CHECKOUT NOW</TopButton>
            </Heading>
            <ProductContainer>
            <ProductWrapper>
            <ProductOutline>
                <Product>
                    <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                    <ProductInfo>
                    <ProductTitle>
                    <b>Product:</b>JESSIE THUNDER SHOES
                    </ProductTitle>
                    <ProductId>
                       <b>ID:</b> 93813718293
                    </ProductId>
                    <Color>
                    </Color>
                    <ProductSize>
                       <b>SIZE:</b> 37.5
                    </ProductSize>
                    </ProductInfo>
                    <AmountContainer>
                    <QtyContainer>
                        <Add/>
                        <QtyLabel>2</QtyLabel>
                        <Remove></Remove></QtyContainer>
                        <Amount>$30</Amount>
                    </AmountContainer>
                    </Product>
                    <Product>
                    <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                    <ProductInfo>
                    <ProductTitle>
                    <b>Product:</b>JESSIE THUNDER SHOES
                    </ProductTitle>
                    <ProductId>
                       <b>ID:</b> 93813718293
                    </ProductId>
                    <Color>
                    </Color>
                    <ProductSize>
                       <b>SIZE:</b> 37.5
                    </ProductSize>
                    </ProductInfo>
                    <AmountContainer>
                    <QtyContainer>
                        <Add/>
                        <QtyLabel>2</QtyLabel>
                        <Remove></Remove></QtyContainer>
                        <Amount>$30</Amount>
                    </AmountContainer>
                    </Product>
                    </ProductOutline>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                     </Summary>  
       
                     </ProductWrapper>
            </ProductContainer>
            <Footer/>
        </Wrapper>
    </Container>
);
}
export default Cart;