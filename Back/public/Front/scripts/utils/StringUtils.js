class StringUtils {
    constructor() {
    }

    static isEmpty(str) {
        return !str || str.trim().length === 0;
    }

    static yesOrNo(booleanField) {
        return booleanField ? 'კი' : 'არა';
    }
}