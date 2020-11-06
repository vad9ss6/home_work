import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    dis?: boolean
    active?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        dis,active,
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const disabledButton = `${!dis ? '' : s.opacity}`;
    const ActiveButton = `${!active && s.opacity}`
    const finalClassName = `${red ? s.red : s.default} ${className} ${disabledButton} ${ActiveButton}`;

    return (
        <button
            className={finalClassName}
            disabled={dis}

            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
}

export default SuperButton;
