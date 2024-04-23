import React, {useEffect} from 'react';
import "./targetSensors.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import ProductCard from "../ProductCard/ProductCard";

const TargetSensorsPage = () => {
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])
    const {products} = useTypedSelector(state => state.allProducts)
    return (
        <div className={"target_sensors_page"}  >
            <div className="container">
                <div className="target_sensors_content">
                    <div className="target_sensors_titles">
                        <div className="title">Датчики цілі</div>
                    </div>
                    <div className="shop_content_items_list">
                        {products.map(product => {
                            if (product._id == "661d5868c274b1ab819732bb"){
                                return <></>
                            } else {
                                return  <ProductCard key={product._id} _id={product._id} img={product.img} productDescription={product.productDescription} productName={product.productName} price={product.price}/>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TargetSensorsPage;