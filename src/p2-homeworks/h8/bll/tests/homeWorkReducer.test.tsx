import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";

let initialState: any[];

beforeEach(() => {
    initialState = [
        {id: 0, name: "Кот", age: 3},
        {id: 1, name: "Александр", age: 66},
        {id: 2, name: "Коля", age: 16},
        {id: 3, name: "Виктор", age: 44},
        {id: 4, name: "Дмитрий", age: 40},
        {id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "SORT", payload: "up"});

    expect(newState).toEqual([
        {id: 1, name: "Александр", age: 66},
        {id: 3, name: "Виктор", age: 44},
        {id: 4, name: "Дмитрий", age: 40},
        {id: 5, name: "Ирина", age: 55},
        {id: 2, name: "Коля", age: 16},
        {id: 0, name: "Кот", age: 3},
    ]);
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "SORT", payload: "down"});

    expect(newState).toEqual([
        {id: 0, name: "Кот", age: 3},
        {id: 2, name: "Коля", age: 16},
        {id: 5, name: "Ирина", age: 55},
        {id: 4, name: "Дмитрий", age: 40},
        {id: 3, name: "Виктор", age: 44},
        {id: 1, name: "Александр", age: 66},
    ]);

});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "CHECK", payload: 18});

    expect(newState).toEqual([
        {id: 1, name: "Александр", age: 66},
        {id: 3, name: "Виктор", age: 44},
        {id: 4, name: "Дмитрий", age: 40},
        {id: 5, name: "Ирина", age: 55}
    ]);

});

test("show full list users", () => {
    const newState = homeWorkReducer(initialState, {type: "FULL-USERS"});

    expect(newState.length).toBe(6)

});
