class UserService {
    constructor() {

    }

    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    
    async addUser(user, callback) {
        var request = new XMLHttpRequest();
        request.open('POST', USER_SERVICE_URL + '/addUser', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload = function() {
            if (this.status === 200) {
                callback();
            } else {

            }
        }
        request.onerror = function() {
            console.log(this.responseText);
        }
        request.send(JSON.stringify(user));
    }
    
    async editUser(user) {
        var request = new XMLHttpRequest();
        request.open('POST', USER_SERVICE_URL + '/editUser', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload = function() {
            console.log(this.responseText);
        }
        request.send(JSON.stringify(user));
    }

    async getUsers() {
        var request = new XMLHttpRequest();
        request.open('GET', USER_SERVICE_URL + '/getUsers', true);
        request.onload = function() {
            console.log(this.responseText);
        };
        request.onerror = function() {
            console.log(this.responseText);
        };
        request.send();
    }

    async findUser(username) {
        var request = new XMLHttpRequest();
        request.open('GET', USER_SERVICE_URL + '/findUser/' + username, true);
        request.onload = function() {
            console.log(this.responseText);
        };
        request.onerror = function() {
            console.log(this.responseText);
        };
        request.send();
    }

    async authenticate(username, password, callback) {
        const body = {
            username: username,
            password: password
        }
        var request = new XMLHttpRequest();
        request.open('POST', USER_SERVICE_URL + '/authenticate', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload = function() {
            if (this.status === 200) {
                callback(JSON.parse(this.response).user);
            } else {
                console.log(this.responseText);
            }
        }
        request.onerror = function() {
            console.log(this.responseText);
        }
        request.send(JSON.stringify(body));
    }

    async addFriend(data) {
        var request = new XMLHttpRequest();
        request.open('POST', USER_SERVICE_URL + '/addFriend', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload = function() {
            console.log(this.responseText);
        }
        request.send(JSON.stringify(data));
    }
}