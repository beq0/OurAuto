class CarPage {
    constructor() {

    }

    static showCarPage(car, carUser) {
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
                                ცილინდრები: ${ObjectUtils.isNullOrUndefined(car.cylinders) ? 'N/A' : car.cylinders}
                            </div>

                            <div class="car-info-text">
                                კარები: ${ObjectUtils.isNullOrUndefined(car.doors) ? 'N/A' : car.doors}
                            </div>

                            <div class="car-info-text">
                                ფერი: ${ObjectUtils.isNullOrUndefined(car.color) ? 'N/A' : car.color}
                            </div>

                            <div class="car-info-text">
                                სალონის ფერი: ${ObjectUtils.isNullOrUndefined(car.interiorColor) ? 'N/A' : car.interiorColor}
                            </div>

                            <div class="car-info-text">
                                ტყავის სალონი: <span style="color: ${StringUtils.yesOrNo(car.leatherInterior) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.leatherInterior)}</span>
                            </div>

                            <div class="car-info-text">
                                აირბეგი: ${ObjectUtils.isNullOrUndefined(car.airbags) ? "N/A" : car.airbags}
                            </div>

                            <div class="car-info-text">
                                ABS: <span style="color: ${StringUtils.yesOrNo(car.ABS) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.ABS)}</span>
                            </div>

                            <div class="car-info-text">
                                ელექტრონული შუშები: <span style="color: ${StringUtils.yesOrNo(car.electronicWindows) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.electronicWindows)}</span>
                            </div>

                            <div class="car-info-text">
                                კონდინციონერი: <span style="color: ${StringUtils.yesOrNo(car.conditioner) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.conditioner)}</span>
                            </div>

                            <div class="car-info-text">
                                კლიმატკონტროლი: <span style="color: ${StringUtils.yesOrNo(car.climateControl) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.climateControl)}</span>
                            </div>

                            <div class="car-info-text">
                                დისკები: <span style="color: ${StringUtils.yesOrNo(car.disks) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.disks)}</span>
                            </div>

                            <div class="car-info-text">
                                ნავიგაცია: <span style="color: ${StringUtils.yesOrNo(car.navigation) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.navigation)}</span>
                            </div>

                            <div class="car-info-text">
                                ცენტრალური საკეტი: <span style="color: ${StringUtils.yesOrNo(car.centralLock) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.centralLock)}</span>
                            </div>

                            <div class="car-info-text">
                                ლუქი: <span style="color: ${StringUtils.yesOrNo(car.upperWindow) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.upperWindow)}</span>
                            </div>

                            <div class="car-info-text">
                                სიგნალიზაცია: <span style="color: ${StringUtils.yesOrNo(car.signalization) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.signalization)}</span>
                            </div>
                        </div>
                        
                        <div class="ci-info-right">
                            <div class="car-info-text">
                                ბორტკომპიუტერი: <span style="color: ${StringUtils.yesOrNo(car.bortComputer) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.bortComputer)}</span>
                            </div>

                            <div class="car-info-text">
                                ჰიდრავლიკა: <span style="color: ${StringUtils.yesOrNo(car.hidraulic) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.hidraulic)}</span>
                            </div>

                            <div class="car-info-text">
                                ანტი-მოცურება: <span style="color: ${StringUtils.yesOrNo(car.antiSlide) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.antiSlide)}</span>
                            </div>

                            <div class="car-info-text">
                                სავარძლების გათბობა: <span style="color: ${StringUtils.yesOrNo(car.seetHeating) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.seetHeating)}</span>
                            </div>

                            <div class="car-info-text">
                                პარკინგკონტროლი: <span style="color: ${StringUtils.yesOrNo(car.parkingControl) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.parkingControl)}</span>
                            </div>

                            <div class="car-info-text">
                                უკანა ხედვის კამერა: <span style="color: ${StringUtils.yesOrNo(car.backViewCamera) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.backViewCamera)}</span>
                            </div>

                            <div class="car-info-text">
                                კრუიზ კონტროლი: <span style="color: ${StringUtils.yesOrNo(car.cruzeControl) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.cruzeControl)}</span>
                            </div>

                            <div class="car-info-text">
                                სტარტ/სტოპ სისტემა: <span style="color: ${StringUtils.yesOrNo(car.startStopSystem) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.startStopSystem)}</span>
                            </div>

                            <div class="car-info-text">
                                სავარძლების მემორი: <span style="color: ${StringUtils.yesOrNo(car.seatMemory) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.seatMemory)}</span>
                            </div>

                            <div class="car-info-text">
                                სანისლე ფარები: <span style="color: ${StringUtils.yesOrNo(car.fogHeadlights) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.fogHeadlights)}</span>
                            </div>

                            <div class="car-info-text">
                                AUX: <span style="color: ${StringUtils.yesOrNo(car.AUX) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.AUX)}</span>
                            </div>

                            <div class="car-info-text">
                                Bluetooth: <span style="color: ${StringUtils.yesOrNo(car.BlueTooth) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.BlueTooth)}</span>
                            </div>

                            <div class="car-info-text">
                                მულტი საჭე: <span style="color: ${StringUtils.yesOrNo(car.multiWheel) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.multiWheel)}</span>
                            </div>

                            <div class="car-info-text">
                                ტექ. დათვალიერება: <span style="color: ${StringUtils.yesOrNo(car.techView) === 'კი' ? '#00d100' : 'red'}">${StringUtils.yesOrNo(car.techView)}</span>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div id="ci-car-info-user-separator"></div>
    
                <div class="ci-user">
                    <a class="ci-user-name" href="#car-user?username=${carUser.username}">
                        <div>
                            ${carUser.username}
                        </div>
                        
                        <div>
                            ${carUser.name}
                        </div>
                    </a>
                    
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
        </div>
        `;
        
        html += similar_cars_html;
        html += '</div>';
        DOMUtils.setScreenContent(html);

        carService.getSimilarCars(car)
            .then((similarCars) => {
                similarCars.forEach(similarCar => {
                    let similarCarsDiv = document.querySelector('.ci-similar-cars');
                    let similarCarDiv = document.createElement('div');
                    similarCarDiv.className = "ci-similar-car";
                    similarCarDiv.innerHTML = 
                        `
                        <a href="#car?carId=${similarCar._id}">
                            <img class="ci-similar-car-img" src="${similarCar.imagePath}">                
                        </a>
            
                        <div class="ci-similar-car-info">
                            <div class="ci-similar-car-main-info">
                                <div class="ci-similar-car-price">
                                    <span>${NumberUtils.getNumWithCommas(similarCar.price)}</span> ₾
                                </div>
            
                                <a class="ci-similar-car-model" href="#car?carId=${similarCar._id}">
                                    <div>${similarCar.brand}</div>
                                    <div>${similarCar.model}</div>
                                </a>
                            </div>
                            
                            <div class="ci-similar-car-general-info">
                                <div>
                                    კატეგორია: ${similarCar.category}
                                </div>
        
                                <div>
                                    წელი: ${similarCar.year}
                                </div>
            
                                <div>
                                    ძრავი: ${similarCar.engine}
                                </div>
                            
                                <div>
                                    ტრანსმისია: ${similarCar.transmission}
                                </div>
        
                                <div>
                                    საწვავი: ${similarCar.fuelType}
                                </div>
            
                                <div>
                                    გარბენი: ${NumberUtils.getNumWithCommas(similarCar.mileage)} კმ
                                </div>
                            </div>
                        </div>
                        `
                    similarCarsDiv.appendChild(similarCarDiv); 
                });
            })
            .catch((err) => {
                console.error(err);
            });
    } 

    static carClicked(carId) {
        MainPage.hideShowFilterButton();
        carService.findCar(carId)
            .then((car) => {
                Promise.all([
                    userService.findUser(car.username)
                ]).then((carInfo) => {
                    this.showCarPage(car, carInfo[0]);
                }).catch((err) => {
                    console.error(err);
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
}