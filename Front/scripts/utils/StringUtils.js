class StringUtils {
    constructor() {
    }

    static isEmpty(str) {
        return !str || str.trim().length === 0;
    }
}