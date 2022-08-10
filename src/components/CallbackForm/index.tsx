import React from 'react';
import './callback-form.scss';
import Button from 'components/Button';
import {
    FormDataType,
    InputErrorType,
    InputsInfoType,
    ResponseMessageType,
} from 'types';
import TextField from 'components/TextField';

interface CallbackFormType {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    inputsInfo: InputsInfoType[];
    formData: FormDataType;
    inputError: InputErrorType;
    notificationMessage: ResponseMessageType;
    isLoading: boolean;
}

const CallbackForm = ({
    onChange,
    inputsInfo,
    formData,
    inputError,
    onFormSubmit,
    notificationMessage,
    isLoading,
}: CallbackFormType) => {
    return (
        <>
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
                                inputError[name as keyof typeof inputError]
                                    ? inputError[
                                          name as keyof typeof inputError
                                      ]
                                    : ''
                            }
                            onChange={onChange}
                        />
                    );
                })}
                <Button
                    children="Отправить"
                    onClick={onFormSubmit}
                    disabled={isLoading}
                />
            </form>
            {notificationMessage.status && (
                <div className="notification">
                    <span>{notificationMessage.status}</span>
                    <br />
                    <span>{notificationMessage.message}</span>
                </div>
            )}
        </>
    );
};

export default CallbackForm;
