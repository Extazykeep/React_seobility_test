export interface InputType {
    value: string;
}
export interface ValidationType {
    inputType: string;
    data: string;
}

export interface InputErrorType {
    errorName: string;
    message: string;
}

export interface FormDataType {
    userNameAndLastname: string;
    userEmail: string;
    userPhone: string;
    userBirth: string;
    userMessage: string;
}
export interface InputsInfoType {
    type: string;
    placeholder: string;
    name: string;
}

export const inputsInfo: InputsInfoType[] = [
    { type: 'text', placeholder: 'Имя фамилия', name: 'userNameAndLastname' },
    { type: 'email', placeholder: 'E-mail', name: 'userEmail' },
    { type: 'tel', placeholder: 'Номер телефона', name: 'userPhone' },
    { type: 'date', placeholder: 'Дата рождения', name: 'userBirth' },
    { type: 'text', placeholder: 'Имя фамилия', name: 'userMessage' },
];
