class CarService {
    constructor() {

    }

    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    
    async addCar(car) {
        var request = new XMLHttpRequest();
        request.open('POST', CAR_SERVICE_URL + '/addCar', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload = () => {
            console.log(this.responseText);
        }
        request.send(JSON.stringify(car));
    }
    
    async editCar(car) {
        var request = new XMLHttpRequest();
        request.open('POST', CAR_SERVICE_URL + '/editCar', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload = function() {
            console.log(this.responseText);
        }
        request.send(JSON.stringify(car));
    }

    async deleteCar(_id) {
        var request = new XMLHttpRequest();
        request.open('DELETE', CAR_SERVICE_URL + "/deleteCar/" + _id, true);
        request.onreadystatechange = function() {
            console.log(this.responseText);
        };
        request.send();
    }

    async getCars() {
        var request = new XMLHttpRequest();
        request.open('GET', CAR_SERVICE_URL + '/getCars', true);
        request.onload = function() {
            console.log(this.responseText);
        };
        request.onerror = function() {
        // There was a connection error of some sort
        };
        request.send();
    }

    async filterCars(filter) {
        var request = new XMLHttpRequest();
        request.open('POST', CAR_SERVICE_URL + '/filterCars', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload = function() {
            console.log(this.responseText);
        }
        request.send(JSON.stringify(filter));
    }

    async findCar(_id) {
        var request = new XMLHttpRequest();
        request.open('GET', CAR_SERVICE_URL + '/findCar/' + _id, true);
        request.onload = function() {
            console.log(this.responseText);
        };
        request.onerror = function() {
        // There was a connection error of some sort
        };
        request.send();
    }

    async getCarsForUser(username) {
        var request = new XMLHttpRequest();
        request.open('GET', CAR_SERVICE_URL + '/getCarsForUser/' + username, true);
        request.onload = function() {
            console.log(this.responseText);
        };
        request.onerror = function() {
        // There was a connection error of some sort
        };
        request.send();
    }
}