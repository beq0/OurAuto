class MainPage {
    constructor() {

    }

    static showMainPage() {
        DOMUtils.setScreenContent(`
        <div class="filter-and-content">
            <div class="filters">
                <div class="filter">
                    <div class="filter-label">მწარმოებელი:</div>
                    <input type="text" id="filter-car-mark">
                </div>
    
                <div class="filter">
                    <div class="filter-label">მოდელი:</div>
                    <input type="text" id="filter-car-model">
                </div>
    
                <div class="filter">
                    <div class="filter-label">საწყისი ფასი:</div>
                    <input type="number" id="filter-car-startPrice">
                </div>
            
                <div class="filter">
                    <div class="filter-label">საბოლოო ფასი:</div>
                    <input type="number" id="filter-car-endPrice">
                </div>
            
                <div class="filter">
                    <div class="filter-label">საწყისი წელი:</div>
                    <input type="number" id="filter-car-startYear">
                </div>
            
                <div class="filter">
                    <div class="filter-label">საბოლოო წელი:</div>
                    <input type="number" id="filter-car-endYear">
                </div>
            
                <div class="filter">
                    <div class="filter-label">ძრავი:</div>
                    <input type="number" id="filter-car-engine" step="0.01">
                </div>
            
                <div class="filter">
                    <div class="filter-label">ტრანსმისია:</div>
                    <input type="text" id="filter-car-transmission">
                </div>
            
                <div class="filter" id="filter-button">
                    <img src="C:/Users/AzRy/Desktop/OurAuto/Front/resources/search.jpg"
                        width="17px" height="17px">
                    <div>გაფილტრვა</div>
                </div>
            </div>
            
            <div id="content">
                
            </div>
        </div>
        `);
        this.bindEntersOnMainPage();

        DOMUtils.setOnClickById('filter-button', this.filterButtonClicked);
    
        carService.getCars()
            .then((cars) => {
                DOMUtils.setInnerHTML("content", this.getCarsHTML(cars));
            })
            .catch((err) => {
                console.error(err);
            });
    }
    
    static getCarsHTML(cars) {
        let carsListHTML = '';
        cars.forEach(car => {
            carsListHTML += 
            `
            <div class="car">
                <img class="car-img" src="${car.imagePath}" onclick="CarPage.carClicked('${car._id}')">
    
                <div class="car-info">
                    <div class="car-main-info">
                        <div class="car-price">
                            <span>${NumberUtils.getNumWithCommas(car.price)}</span> ₾
                        </div>
    
                        <div class="car-model" onclick="CarPage.carClicked('${car._id}')">
                            <span>${car.model}</span>
                        </div>
                    </div>
                    
                    <div class="car-general-info">
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
        return carsListHTML;
    }
    
    static filterButtonClicked() {
        const filter = {
            mark: DOMUtils.getValueById('filter-car-mark'),
            model: DOMUtils.getValueById('filter-car-model'),
            startPrice: parseInt(DOMUtils.getValueById('filter-car-startPrice')),
            endPrice: parseInt(DOMUtils.getValueById('filter-car-endPrice')),
            startYear: parseInt(DOMUtils.getValueById('filter-car-startYear')),
            endYear: parseInt(DOMUtils.getValueById('filter-car-endYear')),
            engine: parseFloat(DOMUtils.getValueById('filter-car-engine')),
            transmission: DOMUtils.getValueById('filter-car-transmission')
        }
        carService.filterCars(filter)
            .then((filteredCars) => {
                DOMUtils.setInnerHTML("content", MainPage.getCarsHTML(filteredCars));
            }).catch((err) => {
                console.error(err);
            });
    }
    
    static bindEntersOnMainPage() {
        function executeFilter() {
            document.getElementById('filter-button').click();
        }
        DOMUtils.bindEnterToElementById('filter-car-mark', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-model', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-startPrice', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-endPrice', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-startYear', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-endYear', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-engine', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-transmission', executeFilter);
    }
}