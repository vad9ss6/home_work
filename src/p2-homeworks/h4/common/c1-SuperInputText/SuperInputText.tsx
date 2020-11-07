import React, {ChangeEvent, CSSProperties, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import s from './SuperInputText.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
};

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const input: CSSProperties = {
        position: 'relative'
    }
    const styleInput: CSSProperties = {
        border: `1px solid ${error ? 'green' : 'red'}`,
        borderRadius: '5px',
        padding: '5px 10px',
        outline: 'none',
    }

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e); // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value);

    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        e.key === "Enter" // если нажата кнопка Enter
        && onEnter // и есть пропс onEnter
        && onEnter(); // то вызвать его
    }

    // const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`;
    // const finalInputClassName = `${error ? styleErrorInput  : className}`; // need to fix with (?:) and s.superInput

    return (
        <div style={input}>
            <input
                type={"text"}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                style={styleInput}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            {error ? '' : <span className={s.errorMessage}>enter your name please!!!</span>}
        </div>
    );
}

export default SuperInputText;