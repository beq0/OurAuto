function logoClicked() {
    DOMUtils.setScreenContent(`
    <div class="filter-and-content">
        <div class="filters">
            <div class="filter">
                <div class="filter-label">მოდელი:</div>
                <input type="text" id="filter-car-model">
            </div>
        
            <div class="filter">
                <div class="filter-label">საწყისი წელი:</div>
                <input type="number" id="filter-car-year-lower">
            </div>
        
            <div class="filter">
                <div class="filter-label">საბოლოო წელი:</div>
                <input type="number" id="filter-car-year-upper">
            </div>
        
            <div class="filter">
                <div class="filter-label">ძრავი:</div>
                <input type="number" id="filter-car-motor">
            </div>
        
            <div class="filter">
                <div class="filter-label">ტრანსმისია:</div>
                <input type="text" id="filter-car-transmission">
            </div>
        
            <div class="filter" id="filter-button" onclick="filterButtonClicked()">
                <img src="https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-4.jpg"
                    width="17px" height="17px">
                <div>გაფილტრვა</div>
            </div>
        </div>
        
        <div id="content">
            
        </div>
    </div>
    `);

    DOMUtils.setInnerHTML("content", getFilteredCarsHTML(null));
}

function filterButtonClicked() {
    filter = {
        model: DOMUtils.getValueById('filter-car-model'),
        yearLower: parseInt(DOMUtils.getValueById('filter-car-year-lower')),
        yearUpper: parseInt(DOMUtils.getValueById('filter-car-year-upper')),
        motor: parseFloat(DOMUtils.getValueById('filter-car-motor')),
        transmission: DOMUtils.getValueById('filter-car-transmission')
    }
    DOMUtils.setInnerHTML("content", getFilteredCarsHTML(filter));
}

function getFilteredCarsHTML(filter) {
    carsListHTML = '';
    let filteredCars = filter === null ? cars : cars.filter(car => {
        return (StringUtils.isEmpty(filter.model) ? true : car.model.includes(filter.model)) &&
        (!filter.yearLower && filter.yearLower !== 0 ? true : car.year >= filter.yearLower) &&
        (!filter.yearUpper && filter.yearUpper !== 0 ? true : car.year <= filter.yearUpper) &&
        (!filter.motor && filter.motor !== 0 ? true : car.motor === filter.motor) && 
        (StringUtils.isEmpty(filter.transmission) ? true : car.transmission.includes(filter.transmission))
    });
    filteredCars.forEach(car => {
        carsListHTML += 
        `
        <div class="car">
            <img class="car-img" src="${car.image}" onclick="carClicked(${car.id})">

            <div class="car-info">
                <div class="car-main-info">
                    <div class="car-price">
                        <span>${NumberUtils.getNumWithCommas(car.price)}</span> ₾
                    </div>

                    <div class="car-model" onclick="carClicked(${car.id})">
                        <span>${car.model}</span>
                    </div>
                </div>
                
                <div class="car-general-info">
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
    return carsListHTML;
}