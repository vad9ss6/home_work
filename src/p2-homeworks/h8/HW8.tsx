import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const initialPeople = [
    {id: 0, name: "Кот", age: 3},
    {id: 1, name: "Александр", age: 66},
    {id: 2, name: "Коля", age: 16},
    {id: 3, name: "Виктор", age: 44},
    {id: 4, name: "Дмитрий", age: 40},
    {id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p.id}>
            some name, age
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div>sort down</div>

            check 18

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
