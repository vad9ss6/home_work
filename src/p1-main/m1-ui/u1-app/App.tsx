import React from "react";
import s from "./App.module.css";
import HW5 from "../../../p2-homeworks/h5/HW5";
import HW7 from "../../../p2-homeworks/h7/HW7";
import HW8 from "../../../p2-homeworks/h8/HW8";
import {Provider} from "react-redux";
import {store} from "../../../p2-homeworks/h8/bll/redux/redux-store";
import HW9 from "../../../p2-homeworks/h9/HW9";


function App() {
    return (
        <div className={s.App}>
            <HW5/>

        </div>
    );
}

export default App;
