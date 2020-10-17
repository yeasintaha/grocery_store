import React from 'react'
import Product from './Product'
import "./Product.css"
import styled from "styled-components";

const ProductList = ({all_items}) => {
    const Items = all_items && all_items.map((items) => {
        return (
            <Product                  
            id={items.id}
            product_name={items.product_name}
            image={items.image} 
            unit={items.unit} 
            price={items.price} 
            /> 
        );
    });
    const Item_style = styled.div`
        display:flex;
        flex-wrap:wrap;
        margin-left:auto;
        margin-right:auto;
        justify-content:center;

        @media screen and (max-width:960px){
            display:flex;
            flex-wrap:wrap;
            justify-content: flex-start;
        }
        @media screen and (max-width:700px){
            display:flex;
            flex-wrap:wrap;
            justify-content: center;
        }
        
        
    `
    return ( 
        <div className="product__list">
        {
           <Item_style>
            {Items}
            </Item_style>  
        }
        </div>
    );
}

export default ProductList;
