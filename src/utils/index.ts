import {
    MAX_LENGTH_MESSAGE,
    MIN_LENGTH_MESSAGE,
    NAME_LASTNAME_LENGTH,
    ONLY_LATIN_WORDS,
    TWO_WORDS_MESSAGE,
    WRONG_EMAIL_MESSAGE,
} from 'consts';

const isLatin = (str: string) => /^[a-zA-Z\s]+$/g.test(str);

const isOnlyTwoWords = (str: string) => {
    return str.split(' ').length === 2;
};

const isWordsValid = (str: string) => {
    console.log(
        str.split(' ').filter((word) => isValidString(word, 3, 30)).length === 2
    );
    return (
        str.split(' ').filter((word) => isValidString(word, 3, 30)).length === 2
    );
};
const isNotLonger = (str: string, count: number) => str.length <= count;

const isEnoughtChars = (str: string, count: number) => str.length >= count;

const isValidString = (str: string, min: number, max: number) =>
    isEnoughtChars(str, min) && isNotLonger(str, max);

export const isValidEmail = (str: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(str);
};

export const isValidMessage = (str: string) => {
    const cutStr = str.trim();
    return isValidString(cutStr, 10, 300);
};

export const isValidNameAndLastname = (str: string) => {
    const cutStr = str.trim();
    return isLatin(cutStr) && isOnlyTwoWords(cutStr) && isWordsValid(cutStr);
};

export const getMessage = (inputType: string, str: string) => {
    switch (inputType) {
        case 'userMessage':
            if (!isEnoughtChars(str, 10)) {
                return MIN_LENGTH_MESSAGE;
            }
            if (!isNotLonger(str, 300)) {
                return MAX_LENGTH_MESSAGE;
            }
            return '';
        case 'userEmail':
            if (!isValidEmail(str)) {
                return WRONG_EMAIL_MESSAGE;
            }
            return '';
        case 'userNameAndLastname':
            if (!isLatin(str)) {
                return ONLY_LATIN_WORDS;
            }
            if (!isOnlyTwoWords(str)) {
                return TWO_WORDS_MESSAGE;
            }
            if (!isWordsValid(str)) {
                return NAME_LASTNAME_LENGTH;
            }
            return '';
        default:
            return '';
    }
};
