import React, {FC} from 'react';
import "./product_card.css"
import {NavLink} from "react-router-dom";

interface IProductCard {
    _id: string,
    img: string,
    productName: string,
    price: string,
    productDescription: string
}

const ProductCard: FC<IProductCard> = ({productDescription, productName, price, _id, img}) => {
    return (
            <div className={"product_card"}>
                <NavLink to={`/single_product/${_id}`}>
                <div className="svg_items">
                    <img src="/image/heard_product_card.svg" alt="heard"/>
                    <img src="/image/comparison_product_card.svg" alt="comparison"/>
                </div>
                <div className="product_photo">
                    <img src={`new-gunpowder-server.vercel.app/api/getImage/${img}`} alt="product_img"/>
                </div>
                <p className="product_title">
                    {productName}
                </p>
                <span className="product_price">
                {price} ₴ / шт
            </span>
                </NavLink>
            </div>
    );
};

export default ProductCard;