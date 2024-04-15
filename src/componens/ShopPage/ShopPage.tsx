import React from 'react';
import "./shop_page.css"
import ProductCard from "../ProductCard/ProductCard";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ShopPage = () => {
    const {products} = useTypedSelector(state => state.allProducts)

    return (
        <div className={"shop_page"} >
            <div className="container">
                <div className="shop_page_content">
                    <div className="shop_content_menu">
                        <ul>
                            <li>Одяг для військових</li>
                            <li>Взуття для військових</li>
                            <li>Тактичні аксесуари</li>
                            <li>Електрика для віськових</li>
                            <li>Головні убори та шоломи</li>
                        </ul>
                        <div className="shop_content_menu_filteres">
                            <p>Фільтри</p>
                            <div className="shop_content_menu_filteres_items">
                                <div className="price">
                                    Ціна
                                    <img src="/image/shop_page_arrow_down.svg" alt=""/>
                                </div>
                                <div className="producer">
                                    Виробник
                                    <img src="/image/shop_page_arrow_down.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop_content_items">
                        <div className="shop_content_items_titles">
                            <div className="title">Магазин</div>
                            <div className="sort">
                                Сортування:
                                <select name="sort" className={'sort_select'}>
                                    <option>Сортуваня</option>
                                    <option value="cheap">Від дешевих до дорогих</option>
                                    <option value="reach">Від дорогих до дешевих</option>
                                    <option value="new">Новинки</option>
                                    <option value="popular">Популярні</option>
                                    <option value="new">Акційні</option>
                                    <option value="no_sort">За замовченням</option>
                                </select>
                            </div>
                        </div>
                        <div className="shop_content_items_list">
                            {products.map(product => {
                                return <ProductCard key={product._id} _id={product._id} img={product.img} productDescription={product.productDescription} productName={product.productName} price={product.price}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;