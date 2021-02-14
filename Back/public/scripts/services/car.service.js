class CarService {
    constructor() {

    }

    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    
    addCar(car) {
        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open('POST', CAR_SERVICE_URL + '/addCar', true);
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            request.onload = function() {
                if (this.status === 200) {
                    resolve();
                } else {
                    reject(new Error(this.responseText));
                }
            }
            request.onerror = function() {
                reject(new Error(this.responseText));
            }
            if (car.image) {
                this.convertToBase64(car.image, (base64Image) => {
                    car.image = base64Image;
                    request.send(JSON.stringify(car));
                });
            } else {
                request.send(JSON.stringify(car));
            }
        });
    }
    
    editCar(car) {
        var request = new XMLHttpRequest();
        request.open('POST', CAR_SERVICE_URL + '/editCar', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload = function() {
            console.log(this.responseText);
        }
        request.send(JSON.stringify(car));
    }

    deleteCar(_id) {
        var request = new XMLHttpRequest();
        request.open('DELETE', CAR_SERVICE_URL + "/deleteCar/" + _id, true);
        request.onreadystatechange = function() {
            console.log(this.responseText);
        };
        request.send();
    }

    getCars() {
        return AjaxRequest.get(CAR_SERVICE_URL + '/getCars');
    }

    filterCars(filter) {
        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open('POST', CAR_SERVICE_URL + '/filterCars', true);
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            request.onload = function() {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(new Error(this.responseText));
                }
            }
            request.onerror = function() {
                reject(new Error(this.responseText));
            }
            request.send(JSON.stringify(filter));
        });
    }

    findCar(carId) {
        return AjaxRequest.get(CAR_SERVICE_URL + '/findCar/' + carId);
    }

    getCarsForUser(username) {
        return AjaxRequest.get(CAR_SERVICE_URL + '/getCarsForUser/' + username);
    }

    getSimilarCars(car) {
        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open('POST', CAR_SERVICE_URL + '/filterCars', true);
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            request.onload = function() {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(new Error(this.responseText));
                }
            }
            request.onerror = function() {
                reject(new Error(this.responseText));
            }
            request.send(JSON.stringify(
                {
                    _id: car._id,
                    brand: car.brand,
                    model: car.model
                }
            ));
        });
    }

    convertToBase64(file, callback) {
        let reader = new FileReader();
        reader.onloadend = function (e) {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };
}