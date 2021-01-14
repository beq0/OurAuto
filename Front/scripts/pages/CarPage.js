class CarPage {
    constructor() {

    }

    static showCarPage(car, carUser, similarCars) {
        let html = 
        `
        <div class="ci-main-container">
            <div class="ci-car-container">
                <div class="ci-car-img">
                    <img src="${car.imagePath}">
                </div>
    
                <div class="ci-car-price">
                    ${NumberUtils.getNumWithCommas(car.price)} ₾
                </div>
    
                <div class="ci-car-info">
                    <div class="ci-main-info">
                        <div class="ci-main-info-left">
                            <div>
                                წელი: ${car.year}
                            </div>
            
                            <div>
                                ძრავი: ${car.engine}
                            </div>
                        
                            <div>
                                ტრანსმისია: ${car.transmission}
                            </div>
                        </div>
                        
                        <div class="ci-main-info-right">
                            <div>
                                გარბენი: ${NumberUtils.getNumWithCommas(car.mileage)} კმ
                            </div>
    
                            <div>
                                ტექ. დათვალიერება: ${car.techView ? 'კი' : 'არა'}
                            </div>
                        </div>
                    </div>
    
                    <div class="ci-info">
                        <div class="ci-info-left">
                            <div>
                                წელი: ${car.year}
                            </div>
    
                            <div>
                                ძრავი: ${car.engine}
                            </div>
                        
                            <div>
                                ტრანსმისია: ${car.transmission}
                            </div>
                        </div>
                        
                        <div class="ci-info-right">
                            <div>
                                გარბენი: ${NumberUtils.getNumWithCommas(car.mileage)} კმ
                            </div>
    
                            <div>
                                ტექ. დათვალიერება: ${car.techView ? 'კი' : 'არა'}
                            </div>
                        </div>
                    </div>
                </div>
    
                <div id="ci-car-info-user-separator"></div>
    
                <div class="ci-user">
                    <div class="ci-user-name">
                        <div>
                            ${carUser.username}
                        </div>
                        
                        <div>
                            ${carUser.name}
                        </div>
                    </div>
                    
                    <div class="ci-user-contact">
                        ტელ: ${carUser.mobile}
                    </div>
                </div>
    
            </div>
        `
        let similar_cars_html = 
        `
        <div class="ci-user-similar-cars-separator"></div>
    
        <div class="ci-similar-cars">
            <div class="ci-similar-cars-label">
                მსგავსი მანქანები
            </div>
        `;
        similarCars.forEach(car => {
            similar_cars_html += 
            `
            <div class="ci-similar-car">
                <img class="ci-similar-car-img" src="${car.imagePath}" onclick="CarPage.carClicked('${car._id}')">
    
                <div class="ci-similar-car-info">
                    <div class="ci-similar-car-main-info">
                        <div class="ci-similar-car-price">
                            <span>${NumberUtils.getNumWithCommas(car.price)}</span> ₾
                        </div>
    
                        <div class="ci-similar-car-model" onclick="CarPage.carClicked('${car._id}')">
                            <span>${car.mark}</span>
                        </div>
                        
                        <div class="ci-similar-car-model" onclick="CarPage.carClicked('${car._id}')">
                            <span>${car.model}</span>
                        </div>
                    </div>
                    
                    <div class="ci-similar-car-general-info">
                        <div>
                            წელი: <span>${car.year}</span>
                        </div>
    
                        <div>
                            ძრავი: <span>${car.engine}</span>
                        </div>
                    
                        <div>
                            ტრანსმისია: <span>${car.transmission}</span>
                        </div>
    
                        <div>
                            გარბენი: <span>${NumberUtils.getNumWithCommas(car.mileage)}</span> კმ
                        </div>
                    </div>
                </div>
            </div>
            `
        });
    
        html += similar_cars_html;
        for (let i = 0; i < 2; i++) html += '</div>';
        DOMUtils.setScreenContent(html);

        DOMUtils.setOnClickByClass('ci-user-name', () => UserComponent.userClicked(carUser.username));
    } 

    static carClicked(carId) {
        carService.findCar(carId)
            .then((car) => {
                Promise.all([
                    userService.findUser(car.username),
                    carService.getSimilarCars(car)
                ]).then((carInfo) => {
                    this.showCarPage(car, carInfo[0], carInfo[1]);
                }).catch((err) => {
                    console.error(err);
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
        
}