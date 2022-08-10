import React, { useState, useCallback, useEffect } from 'react';
import CallbackForm from 'components/CallbackForm';
import { initialData, inputsInfo } from 'consts';
import { FormDataType } from 'types';
import { useSendUserData, useValidation } from 'hooks';
import { isFormValid } from 'utils';

const CallbackFormContainer = () => {
    const [formData, setFormData] = useState<FormDataType>(initialData);
    const { validateData, error } = useValidation();
    const { sendData, isLoading, responseStatus } = useSendUserData();

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
        if (!isFormValid(formData)) {
            alert('Введите валидные данные');
            return;
        }
        sendData(formData);
        setFormData(initialData);
    };

    return (
        <CallbackForm
            formData={formData}
            inputsInfo={inputsInfo}
            inputError={error}
            onChange={setUserInfo}
            onFormSubmit={onFormSubmit}
            notificationMessage={responseStatus}
            isLoading={isLoading}
        />
    );
};

export default CallbackFormContainer;
