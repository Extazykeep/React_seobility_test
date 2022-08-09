import React, { useState, useCallback } from 'react';
import CallbackForm from 'components/CallbackForm';
import { initialData, inputsInfo } from 'consts';
import { FormDataType } from 'types';
import { useValidation } from 'hooks';

const CallbackFormContainer = () => {
    const [formData, setFormData] = useState<FormDataType>(initialData);
    const { validateData, error } = useValidation();

    const setUserInfo = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            let value = event.target.value;
            if (event.target.name === 'userNameAndLastname') {
                value = value.toUpperCase();
            }
            setFormData((prev: FormDataType) => ({
                ...prev,
                [event.target.name]: value,
            }));
            validateData(event.target.name, value);
        },
        []
    );

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <CallbackForm
            formData={formData}
            inputsInfo={inputsInfo}
            inputError={error}
            onChange={setUserInfo}
            onFormSubmit={onFormSubmit}
        />
    );
};

export default CallbackFormContainer;
