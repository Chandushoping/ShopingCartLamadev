import React from 'react';
import styled from 'styled-components';
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";

const Container=styled.div`

`;
const Wrapper=styled.div`
display:flex;`;
const InfoContainer=styled.div`
flex:1;`;

const Title=styled.h1`
font-size:30px;
padding:20px;
`;
const Desc=styled.div`
margin:20px;
font-size:15px;
`;

const SocialIconsContainer=styled.div`
display:flex;
align-content:center;
justify-content:center;

`;
const SocialIcon=styled.div`
background-color:#${(props)=>props.bg};
border-radius:50%;
height:40px;
width:40px;
display: flex;
align-items:center;
justify-content:center;
margin:10px;
color:white;
`;
const UsefulLinks=styled.div`
flex:1;

justify-content:space-between;
`;
const List=styled.ul`
list-style:none;
display:flex;
flex-wrap:wrap;
flex-direction:column;
justify-content:space-between;
`;
const ListItem=styled.li`

cursor:pointer;`;
const Contact=styled.div`
flex:1;

padding:10px;

`;
const ContactItem=styled.div`
display:flex;`;

const Payment = styled.img`
    width: 50%;
    margin:20px;
`;
const ContactWrapper=styled.div`
display:flex;
flex-direction:column;
align-content:center;
justify-content:center;`;

const Footer=()=>{
    return(
        <Container>
            <Wrapper>
                <InfoContainer>
                    <Title>
                        LAMA
                    </Title>
                    <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                    </Desc>
                    <SocialIconsContainer>
                       <SocialIcon bg='3B5999'> <Facebook /></SocialIcon>
                        <SocialIcon bg='E4405F'><Instagram/></SocialIcon>
                       <SocialIcon bg='55ACEE'> <Twitter/></SocialIcon>
                       <SocialIcon bg='E60023'> <Pinterest/></SocialIcon>
                    </SocialIconsContainer>
                </InfoContainer>
                <UsefulLinks>
                    <Title>
                        Useful Links
                    </Title>
                    <List>
                    <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        
                        <ListItem>Terms</ListItem>
                     </List>
                </UsefulLinks>
                <Contact>
                    <Title>
                        Contact
                    </Title>
                    <ContactWrapper>
                    <ContactItem>
                    <Room/>622 Dixie Path , South Tobinchester 98336
                    </ContactItem>
                    <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>+1234355534
                    </ContactItem>
                   <ContactItem>
                   <MailOutline style={{marginRight:"10px"}}/>contact@lamadev
                   </ContactItem></ContactWrapper>
                    
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </Contact>
            </Wrapper>
        </Container>

    );
}
export default Footer;