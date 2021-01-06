class CarService {
    constructor() {

    }

    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    
    async addCar(car, callback) {
        var request = new XMLHttpRequest();
        request.open('POST', CAR_SERVICE_URL + '/addCar', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload = function() {
            if (this.status === 200) {
                callback();
            } else {
                console.error(this.responseText);
            }
        }
        request.onerror = function() {
            console.error(this.response);
        }
        if (car.image) {
            this.convertToBase64(car.image, (base64Image) => {
                car.image = base64Image;
                request.send(JSON.stringify(car));
            });
        } else {
            request.send(JSON.stringify(car));
        }
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

    async getCars(callback) {
        var request = new XMLHttpRequest();
        request.open('GET', CAR_SERVICE_URL + '/getCars', true);
        request.onload = function() {
            if (this.status === 200) {
                callback(JSON.parse(this.responseText));
            } else {
                console.log(this.responseText);
            }
        };
        request.onerror = function() {
            console.log(this.responseText);
        };
        request.send();
    }

    async filterCars(filter, callback) {
        var request = new XMLHttpRequest();
        request.open('POST', CAR_SERVICE_URL + '/filterCars', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload = function() {
            if (this.status === 200) {
                callback(JSON.parse(this.responseText));
            } else {
                console.log(this.responseText);
            }
        }
        request.onerror = function() {
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
            console.log(this.responseText);
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
            console.log(this.responseText);
        };
        request.send();
    }

    convertToBase64(file, callback) {
        let reader = new FileReader();
        reader.onloadend = function (e) {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };
}