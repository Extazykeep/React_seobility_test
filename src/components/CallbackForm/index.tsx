import React from 'react';
import './callback-form.scss';
import Button from 'components/Button';
import { FormDataType, InputErrorType, InputsInfoType } from 'types';
import TextField from 'components/TextField';

interface CallbackFormType {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    inputsInfo: InputsInfoType[];
    formData: FormDataType;
    inputError: InputErrorType;
}

const CallbackForm = ({
    onChange,
    inputsInfo,
    formData,
    inputError,
    onFormSubmit,
}: CallbackFormType) => {
    return (
        <form className="callback-form" noValidate>
            {inputsInfo.map(({ name, placeholder, type }, i) => {
                return (
                    <TextField
                        key={placeholder + i}
                        value={formData[name as keyof typeof formData]}
                        placeholder={placeholder}
                        name={name}
                        inputType={type}
                        errorMessage={
                            inputError.errorName === name
                                ? inputError.message
                                : ''
                        }
                        onChange={onChange}
                    />
                );
            })}
            <Button children="Отправить" onClick={onFormSubmit} />
        </form>
    );
};

export default CallbackForm;
