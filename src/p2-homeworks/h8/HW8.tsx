import React from "react";
import {checkAC, fullUsersAC, initialPeopleType, sortAC} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";

type AppRootStateType = {
    homeWorkReducer: Array<initialPeopleType>
}

function HW8() {
    const initialPeople = useSelector<AppRootStateType, Array<initialPeopleType>>(state => state.homeWorkReducer)
    const dispatch = useDispatch()

    const finalPeople = initialPeople.map(p => (
        <div key={p.id}>
            {p.id}:{p.name}<span>{p.age}лет</span>
        </div>
    ))

    const sortUp = () => {
        const action = sortAC('up')
        dispatch(action)
    }
    const sortDown = () => {
        const action = sortAC('down')
        dispatch(action)
    }
    const checkAge = () => {
        const action = checkAC(18)
        dispatch(action)
    }
    const fullUsers = () => {
        const action = fullUsersAC()
        dispatch(action)
    }

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={checkAge}>check 18</SuperButton></div>
            <div><SuperButton onClick={fullUsers}>Full users</SuperButton></div>

            check 18

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
