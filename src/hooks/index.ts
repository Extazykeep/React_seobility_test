import React from 'react';
import { initialEror } from 'consts';
import {
    isValidMessage,
    isValidEmail,
    isValidNameAndLastname,
    getMessage,
} from 'utils';

export const useValidation = () => {
    const [error, setError] = React.useState(initialEror);

    const validateData: any = (inputType: string, value: string) => {
        switch (inputType) {
            case 'userMessage':
                isValidMessage(value)
                    ? setError(initialEror)
                    : setError({
                          errorName: inputType,
                          message: getMessage(inputType, value),
                      });
                break;
            case 'userEmail':
                isValidEmail(value)
                    ? setError(initialEror)
                    : setError({
                          errorName: inputType,
                          message: getMessage(inputType, value),
                      });
                break;
            case 'userNameAndLastname':
                isValidNameAndLastname(value)
                    ? setError(initialEror)
                    : setError({
                          errorName: inputType,
                          message: getMessage(inputType, value),
                      });
                break;
        }
    };
    return { validateData, error };
};
