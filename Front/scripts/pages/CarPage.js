function carClicked(id) {
    const selectedCar = cars.filter(c => c.id === id)[0];
    let html = 
    `
    <div class="ci-main-container">
        <div class="ci-car-container">
            <div class="ci-car-img">
                <img src="${selectedCar.image}">
            </div>

            <div class="ci-car-price">
                ${NumberUtils.getNumWithCommas(selectedCar.price)} ₾
            </div>

            <div class="ci-car-info">
                <div class="ci-main-info">
                    <div class="ci-main-info-left">
                        <div>
                            წელი: ${selectedCar.year}
                        </div>
        
                        <div>
                            ძრავი: ${selectedCar.motor}
                        </div>
                    
                        <div>
                            ტრანსმისია: ${selectedCar.transmission}
                        </div>
                    </div>
                    
                    <div class="ci-main-info-right">
                        <div>
                            გარბენი: ${NumberUtils.getNumWithCommas(selectedCar.mileage)} კმ
                        </div>

                        <div>
                            ტექ. დათვალიერება: ${selectedCar.techView ? 'კი' : 'არა'}
                        </div>
                    </div>
                </div>

                <div class="ci-info">
                    <div class="ci-info-left">
                        <div>
                            წელი: ${selectedCar.year}
                        </div>

                        <div>
                            ძრავი: ${selectedCar.motor}
                        </div>
                    
                        <div>
                            ტრანსმისია: ${selectedCar.transmission}
                        </div>
                    </div>
                    
                    <div class="ci-info-right">
                        <div>
                            გარბენი: ${NumberUtils.getNumWithCommas(selectedCar.mileage)} კმ
                        </div>

                        <div>
                            ტექ. დათვალიერება: ${selectedCar.techView ? 'კი' : 'არა'}
                        </div>
                    </div>
                </div>
            </div>

            <div id="ci-car-info-user-separator"></div>

            <div class="ci-user">
                <div class="ci-user-name" onclick="UserComponent.userClicked(${userId})">
                    <div>
                        ${userName}
                    </div>
                    
                    <div>
                        ${userFamilyName}
                    </div>
                </div>
                
                <div class="ci-user-contact">
                    ტელ: ${userPhoneNumber}
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
    cars.forEach(car => {
        similar_cars_html += 
        `
        <div class="ci-similar-car">
            <img class="ci-similar-car-img" src="${car.image}" onclick="carClicked(${car.id})">

            <div class="ci-similar-car-info">
                <div class="ci-similar-car-main-info">
                    <div class="ci-similar-car-price">
                        <span>${NumberUtils.getNumWithCommas(car.price)}</span> ₾
                    </div>

                    <div class="ci-similar-car-model" onclick="carClicked(${car.id})">
                        <span>${car.model}</span>
                    </div>
                </div>
                
                <div class="ci-similar-car-general-info">
                    <div>
                        წელი: <span>${car.year}</span>
                    </div>

                    <div>
                        ძრავი: <span>${car.motor}</span>
                    </div>
                
                    <div>
                        ტრანსმისია: <span>${car.transmission}</span>
                    </div>

                    <div>
                        გარბენი: <span>${NumberUtils.getNumWithCommas(car.mileage)}</span> კმ
                    </div>

                    <div>
                        ტექ. დათვალიერება: <span>${car.techView ? 'კი' : 'არა'}</span>
                    </div>
                </div>
            </div>
        </div>
        `
    });

    html += similar_cars_html;
    for (let i = 0; i < 2; i++) html += '</div>';
    DOMUtils.setScreenContent(html);
}