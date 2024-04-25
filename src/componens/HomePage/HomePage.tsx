import React, {useEffect} from 'react';
import Header from "./Header/Header";
import "./Header/header.css"
import OurAdvantages from "./OurAdvatages/OurAdvantages";
import CatalogOfGoods from "./Catalog_of_goods/CatalogOfGoods";
import Sale_Banner from "./Sale_banner/Sale_Banner";
import HitGoods from "./HitGoods/HitGoods";

const HomePage = () => {
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={"home_page"} >
            <Header/>
            <main>
                <OurAdvantages/>
                <CatalogOfGoods/>
                <Sale_Banner/>
                <HitGoods/>
            </main>
        </div>
    );
};

export default HomePage;