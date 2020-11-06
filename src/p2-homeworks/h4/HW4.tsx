import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const error = text ? "error" : "";
    const showAlert = () => {
        if (!error) {
            alert("введите текст...");
        } else {
            alert(text); // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(true);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);
    const disableActive = !text

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <div className={s.container}>
                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        className={s.green}
                    />
                </div>

                <div className={s.container}>
                    <SuperButton
                        dis={disableActive}
                        active={true}
                        onClick={showAlert}
                    >
                        delete
                    </SuperButton>
                </div>

                <div className={s.container}>
                    <SuperCheckbox
                        checked={checked}
                        onChangeChecked={setChecked}
                    >
                        some text
                    </SuperCheckbox>

                    <SuperCheckbox checked={checked} onChange={testOnChange}> click </SuperCheckbox>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    );
}

export default HW4;
