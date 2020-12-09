import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: Array<string>
    onChangeOption: (option: string) => void
}
const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        const valueRadio = e.currentTarget.value
        onChangeOption(valueRadio)
    }
    const mappedOptions = options ? options.map((o, i) => (
        <label key={name + "-" + i}>
            <input
                type={"radio"}
                name={o}
                value={o}
                checked={value === o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
