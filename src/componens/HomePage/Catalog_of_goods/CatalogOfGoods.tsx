import React from 'react';
import "./catalog_of_goods.css"
import ProductCard from "../../ProductCard/ProductCard";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";

const CatalogOfGoods = () => {
    const {products} = useTypedSelector(state => state.allProducts)
    return (
        <section className={"catalog_of_goods"} >
            <h2 className={"section_title"} >
                Каталог товарів
            </h2>
            <div className="container">
                <div className="calalog_list_of_goods">
                    {products.map(product => {
                        return <ProductCard key={product._id} _id={product._id} img={product.img} productDescription={product.productDescription} productName={product.productName} price={product.price}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default CatalogOfGoods;