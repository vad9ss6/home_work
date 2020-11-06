import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";
import {v1} from "uuid";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string, id: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<boolean>(false); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const onChangeHandler = e.target.value
        setName(onChangeHandler); // need to fix
        onChangeHandler ? setError(false) : setError(true)
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUserCallback(name, v1())
            alert(`Hello  ! ${name}`); // need to fix
            setName('')
        } else {
            setError(true)
        }
    }
    const addUser = () => {
        if (name) {
            addUserCallback(name, v1())
            alert(`Hello  ! ${name}`); // need to fix
            setName('')
        } else {
            setError(true)
        }
    };

    const countUser = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            countUser={countUser}
            onKeyPress={onKeyPressHandler}
        />
    );
}

export default GreetingContainer;
