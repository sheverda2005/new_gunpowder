import React from 'react';
import "./hit_goods.css"
import ProductCard from "../../ProductCard/ProductCard";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const HitGoods = () => {
    const {products} = useTypedSelector(state => state.allProducts)
    return (
        <section className={"hit_goods"} >
            <h2 className={"section_title"} >
                Хіт товарів
            </h2>
            <div className="container">
                <div className="hit_goods_items">
                    {products.map(product => {
                        return <ProductCard key={product._id} _id={product._id} img={product.img} productDescription={product.productDescription} productName={product.productName} price={product.price}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default HitGoods;