import React, {FC} from 'react';
import "./searchModal.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

interface ISearchModal {
    active: boolean
}

const SearchModal: FC<ISearchModal> = () => {
    const {activeSearch} = useTypedSelector(state => state.search.searchMenu)
    const {searchMenuModalFalse} = useActions()
    return (
        <div className={activeSearch ? "search_modal active" : "search_modal"}  >
            <div className="container">
                <div className="search_model_content">
                    <input placeholder={"Пошук"} type="text"/>
                    <div onClick={()=> {
                        searchMenuModalFalse()
                    }} className="search_model_exit">
                        <div className="search_model_item one"></div>
                        <div className="search_model_item two"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;