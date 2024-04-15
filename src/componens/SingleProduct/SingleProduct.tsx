import React, {useEffect, useState} from 'react';
import "./single_product_page.css"
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IProduct} from "../../types/getAllProducts";
import {useActions} from "../../hooks/useActions";
import {modalActiveMenuActionsTrue} from "../../store/actions/modalMenu";


function setLocalStorage(name: string, id: string, count: number) {
    localStorage.setItem(name, JSON.stringify({
        id: id,
        count: count
    }))
}

const SingleProduct = () => {
    const [count, setCount ] = useState(1)
    const {products} = useTypedSelector(state => state.allProducts)
    const {modalActiveMenuActionsTrue, modalActiveBasketActionsTrue} = useActions()
    console.log(products)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const {id} = useParams()
    let product: IProduct[] = []
    if (products.length !== 0) {
        product = products.filter(item => {
            if (item._id == id) return item
        })
    }
    if (products.length == 0) {
        return (
            <div></div>
        );
    } else {
        return (
            <div className={'single_product_page'} >
                <div className="container">
                    <div className="single_product_content">
                        <div className="single_product_title adaptive">Військово-тактичний захисний жилет Coyot</div>
                        <div className="single_product_main_img">
                            <img src={`new-gunpowder-server.vercel.app/api/getImage/${product[0].img}`} alt="single product"/>
                        </div>
                        <div className="single_product_text">
                            <div className="single_product_title">
                                {product[0].productName}
                            </div>
                            <div className="single_product_producer">
                                Виробник: <strong>M-TAC</strong>
                            </div>
                            <div className="single_product_price">
                                {product[0].price} ₴
                            </div>
                            <div className="single_product_buy_options">
                                <div className="single_product_count">
                                    <div onClick={() => {
                                        if (count > 1) {
                                            setCount(count - 1)
                                        }
                                    }} className="single_product_count_item minus">-
                                    </div>
                                    <div className="single_product_count_item">{count}</div>
                                    <div onClick={() => {
                                        setCount(count + 1)
                                    }} className="single_product_count_item plus">+
                                    </div>
                                </div>
                                <button onClick={() => {
                                    setLocalStorage(product[0].productName, product[0]._id, count)
                                    modalActiveMenuActionsTrue()
                                    modalActiveBasketActionsTrue()
                                }}>
                                    Придбати
                                </button>
                                <div className="single_product_svg_items">
                                    <img src="/image/heart_single_product.svg" alt="heart"/>
                                    <img src="/image/compare_single_product.svg" alt="compare"/>
                                </div>
                            </div>
                            <div className="product_description">
                                <div className="product_description_title">
                                    Опис
                                </div>
                                <p>
                                    {product[0].productDescription}
                                </p>
                            </div>
                            <div className="product_description">
                                <div className="product_description_title">
                                    Інструкція
                                </div>
                                <p>
                                    <a href={product[0].productLink}>Відеоінструкція</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SingleProduct;