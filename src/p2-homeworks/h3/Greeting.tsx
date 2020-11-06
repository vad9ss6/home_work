import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import '../../index.css'
type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    countUser: number // need to fix any
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, countUser, onKeyPress}) => {
    return (
        <div className='main'>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPress}
                error={name}
            />
            {/*<input value={name} onChange={setNameCallback} onKeyPress={onKeyPress}*/}
            {/*       className={error ? s.error : s.someClass}/>*/}
            <SuperButton
                // пропсу с булевым значением не обязательно указывать true
                dis={!name}
                active={true}
                onClick={addUser}
            >
                Add {/*// название кнопки попадёт в children*/}
            </SuperButton>
            {/*<div><button onClick={addUser}>add</button></div>*/}
            <span>{countUser}</span>
            {/*<div className={error ? s.errorMessageShow : s.errorMessageHide}>please enter name</div>*/}
            {/*{error && <div className={s.errorMessageShow}>please enter name</div>}*/}
        </div>

    );
}

export default Greeting;
