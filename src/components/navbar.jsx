import React from 'react';
import styled from 'styled-components';
import { Badge } from "@material-ui/core";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between; 
  
  `;
const Language=styled.span`
padding-right:20px;
cursor: pointer;
`;
const SearchContainer=styled.div`
display:flex;
border:0.5px solid black;
align-items:center;

`;
const Left=styled.div`
flex:1;
display:flex;

align-items:center;
`;
const Input=styled.input`
border:none;
`;
const Center=styled.div`
flex:1;
font-weight:bold;
font-size:30px;
`;
const Right=styled.div`
display:flex;
flex:1;
justify-content:flex-end;
`;
const MenuItem=styled.div`
cursor: pointer;
margin-left:20px;
`;

const Navbar=()=>
{
    return(
        <Container>
            <Left><Language>
                EN</Language>
                <SearchContainer>
                <Input placeholder='Search'></Input>
                <Search/></SearchContainer>
                   </Left>
            <Center>LAMA</Center>
            <Right>
           <MenuItem>REGISTER
           </MenuItem>
           <MenuItem>SIGN IN
           </MenuItem>
           <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem></Right>
        </Container>
    )

}
export default Navbar;