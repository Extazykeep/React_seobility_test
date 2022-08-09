import { InputsInfoType } from 'types';

export const MAX_LENGTH_MESSAGE: string = 'The length should be less';
export const MIN_LENGTH_MESSAGE: string = 'The length should be longer';
export const WRONG_EMAIL_MESSAGE: string = 'Email addres is not valid';
export const TWO_WORDS_MESSAGE: string =
    'Name and lastname should be exact 2 words';
export const ONLY_LATIN_WORDS: string =
    'Name and lastname should be only latin';
export const NAME_LASTNAME_LENGTH: string =
    'Name and lastname should be atleast 3 chars and less than 30';

export const inputsInfo: InputsInfoType[] = [
    { type: 'text', placeholder: 'Имя фамилия', name: 'userNameAndLastname' },
    { type: 'email', placeholder: 'E-mail', name: 'userEmail' },
    {
        type: 'tel',
        placeholder: 'Номер в форме +7(123)456-78-90',
        name: 'userPhone',
    },
    { type: 'date', placeholder: 'Дата рождения', name: 'userBirth' },
    { type: 'textarea', placeholder: 'Сообщение', name: 'userMessage' },
];

export const initialData = {
    userNameAndLastname: '',
    userEmail: '',
    userPhone: '',
    userBirth: '',
    userMessage: '',
};

export const initialEror = {
    errorName: '',
    message: '',
};
