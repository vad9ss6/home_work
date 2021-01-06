import React from "react";
import HW6 from "../../h6/HW6";
import HW7 from "../../h7/HW7";
import {Provider} from "react-redux";
import {store} from "../../h8/bll/redux/redux-store";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";


function JuniorPlus() {
    return (
        <div>
            <h1>Hello world</h1>
            <HW6/>
            <HW7/>
            <Provider store={store}>
                <HW8/>
            </Provider>
            <HW9/>
            <HW10 />
        </div>
    );
}

export default JuniorPlus;
