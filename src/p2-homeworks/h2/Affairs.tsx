import React from "react";
import Affair from "./Affair";
import {AffairPriorityType, AffairType} from "./HW2";
import s from "../h4/HW4.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type AffairsPropsType = { // need to fix any
    filterActive:AffairPriorityType
    data: Array<AffairType>
    setFilter: (a: AffairPriorityType) => void
    deleteAffairCallback: (a: number) => void

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a:AffairType ) => (
        <Affair // should work
            key={a.id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />

    ))


    const setAll = () =>  props.setFilter('all')// need to fix
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    const activeLinkAll =  props.filterActive === 'all'
    const activeLinkHigh =  props.filterActive === 'high'
    const activeLinkMiddle =  props.filterActive === 'middle'
    const activeLinkLow =  props.filterActive === 'low'

    return (
        <div >
            {mappedAffairs}
            {/*<button onClick={setAll}>All</button>*/}
            {/*<button onClick={setHigh}>High</button>*/}
            {/*<button onClick={setMiddle}>Middle</button>*/}
            {/*<button onClick={setLow}>Low</button>*/}
            <SuperButton
                // пропсу с булевым значением не обязательно указывать true

                active={activeLinkAll}
                onClick={setAll}
            >
                All {/*// название кнопки попадёт в children*/}
            </SuperButton>
            <SuperButton
                // пропсу с булевым значением не обязательно указывать true

                active={activeLinkHigh}
                onClick={setHigh}
            >
                High {/*// название кнопки попадёт в children*/}
            </SuperButton>
            <SuperButton
                // пропсу с булевым значением не обязательно указывать true

                active={activeLinkMiddle}
                onClick={setMiddle}
            >
                Middle {/*// название кнопки попадёт в children*/}
            </SuperButton>
            <SuperButton
                // пропсу с булевым значением не обязательно указывать true

                active={activeLinkLow}
                onClick={setLow}
            >
                Low {/*// название кнопки попадёт в children*/}
            </SuperButton>

        </div>
    );
}

export default Affairs;
