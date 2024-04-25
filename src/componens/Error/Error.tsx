import React from 'react';
import "./error.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Error = () => {
    const {error} = useTypedSelector(state => state.error)
    if (error) {
        return (
            <div className={"error"}>
                <p>{error}</p>
            </div>
        );
    } else {
        return <></>
    }
};

export default Error;