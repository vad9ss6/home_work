import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (a: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {

        props.deleteAffairCallback(props.affair.id)
    };// need to fix

    return (
        <div className={s.space_around}>
            {props.affair.name}

            {/*<button onClick={deleteCallback}>X</button>*/}
            <SuperButton
                // пропсу с булевым значением не обязательно указывать true

                active={true}
                onClick={deleteCallback}
            >
                X
            </SuperButton>
        </div>
    );
}

export default Affair;
