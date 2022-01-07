import React from 'react';
import styled from 'styled-components';
import {popularProducts} from '../data'
import Product from './Product';
const Container=styled.div`
display:flex;
height:100vh;
flex-wrap: wrap;
width:100%;
`;
const Products=()=>{
    return(
        <Container>
            {
                popularProducts.map((item)=>(<Product item={item} key={item.id}></Product>))
            }
            </Container>
    );
}
export default Products;