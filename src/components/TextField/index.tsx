import React from 'react';

interface TextFieldProps {
    value: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    inputType: string;
    errorMessage?: string;
    placeholder: string;
    name: string;
}

export default React.memo(function TextField({
    value,
    onChange = () => {},
    inputType,
    errorMessage,
    placeholder,
    name,
}: TextFieldProps) {
    return (
        <>
            <input
                name={name}
                type={inputType}
                value={value}
                placeholder={placeholder}
                onChange={(event) => onChange(event)}
            />
            <p
                style={{
                    color: 'red',
                    textAlign: 'center',
                    maxWidth: '60%',
                    margin: 'auto',
                }}
            >
                {errorMessage}
            </p>
        </>
    );
});
