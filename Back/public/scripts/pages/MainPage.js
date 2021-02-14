class MainPage {
    constructor() {

    }

    static showMainPage() {
        this.showShowFilterButton();
        DOMUtils.setScreenContent(`
        <div class="filter-and-content">
            <form class="filters">
                <div class="filter">
                    <div class="filter-label">მწარმოებელი:</div>
                    <select class="filter-dropdown" name="filter-brands" id="filter-car-brand">
                        
                    </select>
                </div>
    
                <div class="filter">
                    <div class="filter-label">მოდელი:</div>
                    <select class="filter-dropdown" name="filter-models" id="filter-car-model">
                        
                    </select>
                </div>

                <div class="filter">
                    <div class="filter-label">გარიგების ტიპი:</div>
                    <select class="filter-dropdown" name="filter-sell-types" id="filter-car-sell-type">
                        
                    </select>
                </div>

                <div class="filter">
                    <div class="filter-label">კატეგორია:</div>
                    <select class="filter-dropdown" name="filter-categories" id="filter-car-category">
                        
                    </select>
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
                    <select class="filter-dropdown" name="filter-transmissions" id="filter-car-transmission">
                        
                    </select>
                </div>

                <div class="filter">
                    <div class="filter-label">საწვავი:</div>
                    <select class="filter-dropdown" name="filter-fuel-types" id="filter-car-fuel-type">
                        
                    </select>
                </div>

                <div class="filter">
                    <div class="filter-label">განბაჟება:</div>
                    <select class="filter-dropdown" name="filter-custom-types" id="filter-car-custom-type">
                        
                    </select>
                </div>

                <div class="filter">
                    <div class="filter-label">საჭე:</div>
                    <select class="filter-dropdown" name="filter-wheels" id="filter-car-wheel">
                        
                    </select>
                </div>

                <div class="filter">
                    <div class="filter-label">მდებარეობა:</div>
                    <select class="filter-dropdown" name="filter-positions" id="filter-car-position">
                        
                    </select>
                </div>
            
                <div class="filter" id="filter-button">
                    <img src="./resources/search.jpg"
                        width="17px" height="17px">
                    <div>გაფილტრვა</div>
                </div>
            </form>
            
            <div id="content">
                
            </div>
        </div>
        `);
        this.bindEntersOnMainPage();
        Promise.all([
            fixedDataService.getBrands(),
            fixedDataService.getSellTypes(),
            fixedDataService.getCategories(),
            fixedDataService.getTransmissions(),
            fixedDataService.getFuelTypes(),
            fixedDataService.getCustomTypes(),
            fixedDataService.getWheels(),
            fixedDataService.getPositions(),
        ]).then((fixedDatas) => {
            const Brands = fixedDatas[0];
            const SellTypes = fixedDatas[1];
            const Categories = fixedDatas[2];
            const Transmissions = fixedDatas[3];
            const FuelTypes = fixedDatas[4];
            const CustomTypes = fixedDatas[5];
            const Wheels = fixedDatas[6];
            const Positions = fixedDatas[7];
            
            DOMUtils.addOptionsToSelectById('filter-car-brand', Brands);
            let carBrandFilter = document.getElementById('filter-car-brand');
            carBrandFilter.onchange = () => {
                const chosenBrand = DOMUtils.getValueById('filter-car-brand');
                fixedDataService.getModelsForBrand(chosenBrand)
                    .then((models) => {
                        DOMUtils.removeAllOptionsForSelectById('filter-car-model');
                        DOMUtils.addOptionsToSelectById('filter-car-model', models);
                    })
                    .catch((err) => {
                        DOMUtils.removeAllOptionsForSelectById('filter-car-model');
                    });
            }
            DOMUtils.addOptionsToSelectById('filter-car-sell-type', SellTypes);
            DOMUtils.addOptionsToSelectById('filter-car-category', Categories);
            DOMUtils.addOptionsToSelectById('filter-car-transmission', Transmissions);
            DOMUtils.addOptionsToSelectById('filter-car-fuel-type', FuelTypes);
            DOMUtils.addOptionsToSelectById('filter-car-custom-type', CustomTypes);
            DOMUtils.addOptionsToSelectById('filter-car-wheel', Wheels);
            DOMUtils.addOptionsToSelectById('filter-car-position', Positions);
        }).catch((err) => {
            console.error(err);
        });

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
                <a href="#car?carId=${car._id}">
                    <img class="car-img" src="${car.imagePath}">
                </a>

                <div class="car-info">
                    <div class="car-main-info">
                        <div class="car-price">
                            <span>${NumberUtils.getNumWithCommas(car.price)}</span> ₾
                        </div>

                        <a href="#car?carId=${car._id}" class="car-model">
                            <div>${car.brand}</div>
                            <div>${car.model}</div>
                        </a>
                    </div>
                    
                    <div class="car-general-info">
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
        return carsListHTML;
    }
    
    static filterButtonClicked() {
        const filter = {
            brand: DOMUtils.getValueById('filter-car-brand'),
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
        DOMUtils.bindEnterToElementById('filter-car-brand', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-model', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-startPrice', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-endPrice', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-startYear', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-endYear', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-engine', executeFilter);
        DOMUtils.bindEnterToElementById('filter-car-transmission', executeFilter);
    }

    static showFilterButtonClicked() {
        let filtersElem = document.querySelector('.filters');
        if (filtersShown) {
            filtersElem.style['height'] = "0";
            filtersElem.style['padding-top'] = "0";
            filtersElem.style['padding-bottom'] = "0";
        } else {
            filtersElem.style['height'] = "auto";
            filtersElem.style['padding-top'] = "10px";
            filtersElem.style['padding-bottom'] = "15px";
        }
        filtersShown = !filtersShown;
    }

    static hideShowFilterButton() {
        document.getElementById('show-filter-button').style.visibility = 'hidden';
    }

    static showShowFilterButton() {
        document.getElementById('show-filter-button').style.visibility = 'visible';
    }
}