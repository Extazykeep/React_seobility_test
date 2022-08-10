import React, { useState } from 'react';
import { FormDataType } from 'types';
import {
    isValidMessage,
    isValidEmail,
    isValidNameAndLastname,
    getMessage,
} from 'utils';

const initialEror = {
    userMessage: '',
    userEmail: '',
    userNameAndLastname: '',
};

export const useValidation = () => {
    const [error, setError] = React.useState(initialEror);
    const validateData: any = (inputType: string, value: string) => {
        switch (inputType) {
            case 'userMessage':
                setError((prev) => ({
                    ...prev,
                    [inputType]: !isValidMessage(value)
                        ? getMessage(inputType, value)
                        : '',
                }));
                break;
            case 'userEmail':
                setError((prev) => ({
                    ...prev,
                    [inputType]: !isValidEmail(value)
                        ? getMessage(inputType, value)
                        : '',
                }));
                break;
            case 'userNameAndLastname':
                setError((prev) => ({
                    ...prev,
                    [inputType]: !isValidNameAndLastname(value)
                        ? getMessage(inputType, value)
                        : '',
                }));
                break;
        }
    };
    return { validateData, error };
};

export const useSendUserData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseStatus, setResponseStatus] = useState({
        status: '',
        message: '',
    });

    async function sendData(userData: FormDataType) {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:1337/usersdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(userData),
            });
            if (response.status < 300) {
                setResponseStatus({
                    status: response.statusText,
                    message: 'data send successfully',
                });
            } else {
                setResponseStatus({
                    status: response.statusText,
                    message: 'something went wrong',
                });
            }
        } catch (error: any) {
            setResponseStatus({
                status: '404',
                message: 'something went wrong',
            });
        } finally {
            setIsLoading(false);
        }
    }

    return { sendData, responseStatus, isLoading };
};
