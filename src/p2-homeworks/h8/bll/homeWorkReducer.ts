type sortType = {
    type: 'SORT'
    payload: 'up' | 'down'
}
type checkType = {
    type: 'CHECK'
    payload: number
}
type fullUsersType = {
    type: 'FULL-USERS'
}

type actionType =
    | sortType
    | checkType
    | fullUsersType

const initialPeople: Array<initialPeopleType> = [
    {id: 0, name: "Кот", age: 3},
    {id: 1, name: "Александр", age: 66},
    {id: 2, name: "Коля", age: 16},
    {id: 3, name: "Виктор", age: 44},
    {id: 4, name: "Дмитрий", age: 40},
    {id: 5, name: "Ирина", age: 55},
]

export type initialPeopleType = {
    id: number
    name: string
    age: number
}
export const homeWorkReducer = (state: Array<initialPeopleType> = initialPeople, action: actionType): Array<initialPeopleType> => {
    switch (action.type) {
        case "SORT": {

            let stateCopy = [...state]
            if (action.payload === 'up') {
                stateCopy = state.sort((a, b) => (a.name < b.name) ? -1 : 0)
            }
            if (action.payload === 'down') {
                stateCopy = state.sort((a, b) => (a.name > b.name) ? -1 : 0)
            }

            return [...stateCopy]
        }
        case "CHECK": {
            debugger
            let stateCopy = {...state}
            if (action.payload === 18) {
                stateCopy = state.filter(user => user.age >= 18)
            }

            return stateCopy
        }
        case "FULL-USERS": {
            //Просто хотел вернуть все объекты =))))
            const initState = [
                {id: 0, name: "Кот", age: 3},
                {id: 1, name: "Александр", age: 66},
                {id: 2, name: "Коля", age: 16},
                {id: 3, name: "Виктор", age: 44},
                {id: 4, name: "Дмитрий", age: 40},
                {id: 5, name: "Ирина", age: 55},
            ]
            return [
                ...initState.map(u => u)
            ]
        }
        default:
            return state
    }
};

export const sortAC = (payload: 'up' | 'down'): sortType => {
    return {type: "SORT", payload}
}
export const checkAC = (payload: number): checkType => {
    return {type: "CHECK", payload}
}
export const fullUsersAC = ():fullUsersType => {
    return {type: "FULL-USERS"}
}



