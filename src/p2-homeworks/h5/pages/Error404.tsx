import React from "react";
import err from "./error.jpg"
import s from "./pages.module.css"


function Error404() {
    return (
        <div className={s.containerError}>
            <img className={s.imgError} src={err} alt="not found"/>
        </div>
    );
}

export default Error404;
