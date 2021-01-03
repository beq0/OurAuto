class ArrayUtils {
    constructor() {
    }

    static isEmpty(arr) {
        return arr === null || arr.length === 0;
    }

    static isNotEmpty(arr) {
        return !this.isEmpty(arr);
    }
}