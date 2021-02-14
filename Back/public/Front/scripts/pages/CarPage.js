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
                            <div class="car-main-info-text">
                                ბენდი: ${car.brand}
                            </div>

                            <div class="car-main-info-text">
                                მოდელი: ${car.model}
                            </div>

                            <div class="car-main-info-text">
                                კატეგორია: ${car.category}
                            </div>

                            <div class="car-main-info-text">
                                წელი: ${car.year}
                            </div>
            
                            <div class="car-main-info-text">
                                ძრავი: ${car.engine}
                            </div>
                        </div>
                        
                        <div class="ci-main-info-right">
                            <div class="car-main-info-text">
                                ტრანსმისია: ${car.transmission}
                            </div>

                            <div class="car-main-info-text">
                                საწვავის ტიპი: ${car.fuelType}
                            </div>

                            <div class="car-main-info-text">
                                გარბენი: ${NumberUtils.getNumWithCommas(car.mileage)} კმ
                            </div>

                            <div class="car-main-info-text">
                                განბაჟებული: ${StringUtils.yesOrNo(car.customType)}
                            </div>

                            <div class="car-main-info-text">
                                მდებარეობა: ${car.position}
                            </div>
                        </div>
                    </div>
    
                    <div class="ci-info">
                        <div class="ci-info-left">
                            <div class="car-info-text">
                                ცილინდრები: ${car.cylinders}
                            </div>

                            <div class="car-info-text">
                                კარები: ${car.doors}
                            </div>

                            <div class="car-info-text">
                                ფერი: ${car.color}
                            </div>

                            <div class="car-info-text">
                                სალონის ფერი: ${car.interiorColor}
                            </div>

                            <div class="car-info-text">
                                ტყავის სალონი: ${StringUtils.yesOrNo(car.leatherInterior)}
                            </div>

                            <div class="car-info-text">
                                აირბეგი: ${StringUtils.yesOrNo(car.airbags)}
                            </div>

                            <div class="car-info-text">
                                ABS: ${StringUtils.yesOrNo(car.ABS)}
                            </div>

                            <div class="car-info-text">
                                ელექტრონული შუშები: ${StringUtils.yesOrNo(car.electronicWindows)}
                            </div>

                            <div class="car-info-text">
                                კონდინციონერი: ${StringUtils.yesOrNo(car.conditioner)}
                            </div>

                            <div class="car-info-text">
                                კლიმატკონტროლი: ${StringUtils.yesOrNo(car.climateControl)}
                            </div>

                            <div class="car-info-text">
                                დისკები: ${StringUtils.yesOrNo(car.disks)}
                            </div>

                            <div class="car-info-text">
                                ნავიგაცია: ${StringUtils.yesOrNo(car.navigation)}
                            </div>

                            <div class="car-info-text">
                                ცენტრალური საკეტი: ${StringUtils.yesOrNo(car.centralLock)}
                            </div>

                            <div class="car-info-text">
                                ლუქი: ${StringUtils.yesOrNo(car.upperWindow)}
                            </div>

                            <div class="car-info-text">
                                სიგნალიზაცია: ${StringUtils.yesOrNo(car.signalization)}
                            </div>
                        </div>
                        
                        <div class="ci-info-right">
                            <div class="car-info-text">
                                ბორტკომპიუტერი: ${StringUtils.yesOrNo(car.bortComputer)}
                            </div>

                            <div class="car-info-text">
                                ჰიდრავლიკა: ${StringUtils.yesOrNo(car.hidraulic)}
                            </div>

                            <div class="car-info-text">
                                ანტი-მოცურება: ${StringUtils.yesOrNo(car.antiSlide)}
                            </div>

                            <div class="car-info-text">
                                სავარძლების გათბობა: ${StringUtils.yesOrNo(car.seetHeating)}
                            </div>

                            <div class="car-info-text">
                                პარკინგკონტროლი: ${StringUtils.yesOrNo(car.parkingControl)}
                            </div>

                            <div class="car-info-text">
                                უკანა ხედვის კამერა: ${StringUtils.yesOrNo(car.backViewCamera)}
                            </div>

                            <div class="car-info-text">
                                კრუიზ კონტროლი: ${StringUtils.yesOrNo(car.cruzeControl)}
                            </div>

                            <div class="car-info-text">
                                სტარტ/სტოპ სისტემა: ${StringUtils.yesOrNo(car.startStopSystem)}
                            </div>

                            <div class="car-info-text">
                                სავარძლების მემორი: ${StringUtils.yesOrNo(car.seatMemory)}
                            </div>

                            <div class="car-info-text">
                                სანისლე ფარები: ${StringUtils.yesOrNo(car.fogHeadlights)}
                            </div>

                            <div class="car-info-text">
                                AUX: ${StringUtils.yesOrNo(car.AUX)}
                            </div>

                            <div class="car-info-text">
                                Bluetooth: ${StringUtils.yesOrNo(car.BlueTooth)}
                            </div>

                            <div class="car-info-text">
                                მულტი საჭე: ${StringUtils.yesOrNo(car.multiWheel)}
                            </div>

                            <div class="car-info-text">
                                ტექ. დათვალიერება: ${StringUtils.yesOrNo(car.techView)}
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
                            <div>${car.brand}</div>
                            <div>${car.model}</div>
                        </div>
                    </div>
                    
                    <div class="ci-similar-car-general-info">
                        <div>
                            კატეგორია: ${car.category}
                        </div>

                        <div>
                            წელი: ${car.year}
                        </div>
    
                        <div>
                            ძრავი: ${car.engine}
                        </div>
                    
                        <div>
                            ტრანსმისია: ${car.transmission}
                        </div>

                        <div>
                            საწვავი: ${car.fuelType}
                        </div>
    
                        <div>
                            გარბენი: ${NumberUtils.getNumWithCommas(car.mileage)} კმ
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