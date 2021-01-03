class ObjectUtils {
    constructor() {
    }

    static isNullOrUndefined(obj) {
        return obj === null || obj === undefined;
    }

    static isNotNullOrUndefined(obj) {
        return !this.isNullOrUndefined(obj);
    }

    static isNull(obj) {
        return obj === null;
    }

    static isNotNull(obj) {
        return !this.isNull(obj);
    }
    
    static isUndefined(obj) {
        return obj === undefined;
    }

    static isNotUndefined(obj) {
        return !this.isUndefined(obj);
    }
}