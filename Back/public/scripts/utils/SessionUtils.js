class SessionUtils {
    constructor() {
    }

    static getItem(key) {
        return sessionStorage.getItem(key);
    }

    static setItem(key, value) {
        sessionStorage.setItem(key, value);
    }

    static removeItem(key) {
        sessionStorage.removeItem(key);
    }

    static setUsername(username) {
        this.setItem('username', username);
    }

    static getUsername() {
        return this.getItem('username');
    }

    static removeUsername() {
        this.removeItem('username');
    }
}