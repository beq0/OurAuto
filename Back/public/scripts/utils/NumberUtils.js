class NumberUtils {
    constructor() {
    }

    static isZero(num) {
        return num === null || num === 0;
    }

    static isNonZero(num) {
        return !this.isZero(num);
    }

    static getNumWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}