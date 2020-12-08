const filter_and_content_html = 
`
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
`;

let userId = 1;
let userUsername = 'beq0';
let userName = 'ბექა';
let userFamilyName = 'გუგულაშვილი';
let userPhoneNumber = '+995555555555';

let burgerMenuShown = false, avatarShown = false;

let cars = [
    {
        id: 1,
        image: 'https://bringatrailer.com/wp-content/uploads/2018/07/1990_bmw_325ic_hartge_h35_15312399737dff9f98764da15085606_10154762629479201_7529277224418374730_n.jpg?fit=940%2C627',
        model: 'bmw e30',
        price: 20000,
        year: 1995,
        motor: 2.5,
        transmission: 'მექანიკა',
        mileage: 155000,
        techView: false
    },
    {
        id: 2,
        image: 'https://pictures.dealer.com/j/justmercedes/1458/a8b667f5a9540ba18440c079c2663e2dx.jpg',
        model: 'S class 2020',
        price: 100000,
        year: 2020,
        motor: 5.5,
        transmission: 'ავტომატიკა',
        mileage: 155000,
        techView: true
    },
    {
        id: 3,
        image: 'https://cnet2.cbsistatic.com/img/IcPcR4GvpIj62M19-X9e7rzeQ64=/1200x675/2012/05/08/8a711731-bb76-11e2-8a8e-0291187978f3/35266802_OVR.JPG',
        model:  'პრიუსი კარგ მდგომარეობაში',
        price: 13000,
        year: 2012,
        motor: 1.3,
        transmission: 'ავტომატიკა',
        mileage: 0,
        techView: true
    },
    {
        id: 4,
        image: 'https://picture1.goo-net.com/7000707591/30160222/J/70007075913016022200100.jpg',
        model:  'honda fit 2005 ფიტი',
        price: 7000,
        year: 2005,
        motor: 1.8,
        transmission: 'ავტოამტიკა',
        mileage: 240000,
        techView: true
    },
]

window.onload = () => {
    setInnerHTML("content", getcarsHTML(null));
    setInnerHTML("main-user", userName + " " + userFamilyName);
    setInnerHTML("avatar-user", userName + " " + userFamilyName);
    removePreload();
}

function logoClicked() {
    setScreenContent(filter_and_content_html);
    setInnerHTML("content", getcarsHTML(null));
}

function mainUserClicked() {
    setScreenContent(getUserInfoHTML(null));
}

function avatarUserClicked() {
    setScreenContent(getUserInfoHTML(null));
}

function userClicked(userId) {
    setScreenContent(getUserInfoHTML(userId));
}

function setScreenContent(html) {
    document.querySelector('.filter-and-content').innerHTML = html;
}

function filterButtonClicked() {
    filter = {
        model: getValueById('filter-car-model'),
        yearLower: parseInt(getValueById('filter-car-year-lower')),
        yearUpper: parseInt(getValueById('filter-car-year-upper')),
        motor: parseFloat(getValueById('filter-car-motor')),
        transmission: getValueById('filter-car-transmission')
    }
    setInnerHTML("content", getcarsHTML(filter));
}

function removePreload() {
    document.body.classList.remove("preload");
}

function carClicked(id) {
    let mainContainer = document.querySelector('.filter-and-content');
    selectedCar = cars.filter(c => c.id === id)[0];
    html = 
    `
    <div class="ci-main-container">
        <div class="ci-car-container">
            <div class="ci-car-img">
                <img src="${selectedCar.image}">
            </div>

            <div class="ci-car-price">
                ${getNumWithCommas(selectedCar.price)} ₾
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
                            გარბენი: ${getNumWithCommas(selectedCar.mileage)} კმ
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
                            გარბენი: ${getNumWithCommas(selectedCar.mileage)} კმ
                        </div>

                        <div>
                            ტექ. დათვალიერება: ${selectedCar.techView ? 'კი' : 'არა'}
                        </div>
                    </div>
                </div>
            </div>

            <div id="ci-car-info-user-separator"></div>

            <div class="ci-user">
                <div class="ci-user-name" onclick="userClicked(${userId})">
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
    similar_cars_html = 
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
                        <span>${getNumWithCommas(car.price)}</span> ₾
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
                        გარბენი: <span>${getNumWithCommas(car.mileage)}</span> კმ
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
    mainContainer.innerHTML = html;
}

function setInnerHTML(id, html) {
    let elem = document.getElementById(id); 
    if (elem !== null) elem.innerHTML = html;
}

function setListener(id, event, action) {
    let elem = document.getElementById(id);
    if (elem !== null) elem.addEventListener(event, action);
}

function getValueById(id) {
    return document.getElementById(id).value;
}

function getcarsHTML(filter) {
    carsListHTML = '';
    filteredCars = filter === null ? cars : cars.filter(car => {
        return (isEmpty(filter.model) ? true : car.model.includes(filter.model)) &&
        (!filter.yearLower && filter.yearLower !== 0 ? true : car.year >= filter.yearLower) &&
        (!filter.yearUpper && filter.yearUpper !== 0 ? true : car.year <= filter.yearUpper) &&
        (!filter.motor && filter.motor !== 0 ? true : car.motor === filter.motor) && 
        (isEmpty(filter.transmission) ? true : car.transmission.includes(filter.transmission))
    });
    filteredCars.forEach(car => {
        carsListHTML += 
        `
        <div class="car">
            <img class="car-img" src="${car.image}" onclick="carClicked(${car.id})">

            <div class="car-info">
                <div class="car-main-info">
                    <div class="car-price">
                        <span>${getNumWithCommas(car.price)}</span> ₾
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
                        გარბენი: <span>${getNumWithCommas(car.mileage)}</span> კმ
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

function getUserInfoHTML(userId) {
    userinfoHTML = 
    `
    <div class="u-container">
        <div class="u-u">
            <div class="u-img">
                <img src="resources/user.png">
            </div>

            <div class="u-main-info">
                <div class="u-info u-username">
                    ${userUsername}
                </div>
            
                <div class="u-info">
                    ${userName}
                </div>
                
                <div class="u-info">
                    ${userFamilyName}
                </div>
            
                <div class="u-info">
                    ${userPhoneNumber}
                </div>
            </div>
        </div>

        <div class="u-contact-buttons">
            <div class="u-contact-button u-add-friend" onclick="addFriendClicked()">
                <img src="resources/addFriend.jpg">
                მეგობრებში დამატება
            </div>

            <div class="u-contact-button u-contact" onclick="contactClicked()">
                <img src="resources/message.png">
                დაკავშირება
            </div>
        </div>

        <div class="u-cars">
            <div class="u-cars-label">
                მომხმარებლის განცხადებები
            </div>`;
            
            cars.forEach(car => {
            userinfoHTML += 
            `
            <div class="u-car">
                <img class="u-car-img" src="${car.image}" onclick="carClicked(${car.id})">
    
                <div class="u-car-info">
                    <div class="u-car-main-info">
                        <div class="u-car-price">
                            <span>${getNumWithCommas(car.price)}</span> ₾
                        </div>
    
                        <div class="u-car-model" onclick="carClicked(${car.id})">
                            <span>${car.model}</span>
                        </div>
                    </div>
                    
                    <div class="u-car-general-info">
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
                            გარბენი: <span>${getNumWithCommas(car.mileage)}</span> კმ
                        </div>
    
                        <div>
                            ტექ. დათვალიერება: <span>${car.techView ? 'კი' : 'არა'}</span>
                        </div>
                    </div>
                </div>
            </div>
            `;});
        userinfoHTML += 
        `    
        </div>
        
    </div>
    `
    return userinfoHTML;
}


function burgerMenuClicked() {
    let burgerMenu = document.querySelector(".burger-menu-items");
    let burgerMenuImg = document.getElementById('burger-menu-img');
    if (burgerMenuShown) {
        burgerMenuImg.src = 'resources/burger.png';
        burgerMenu.style.left = '-230px';
    } else {
        burgerMenuImg.src = 'resources/close.png';
        burgerMenu.style.left = '0px';
    }
    burgerMenuShown = !burgerMenuShown;
}

function avatarClicked() {
    let avatar = document.getElementById("avatar-content");
    if (avatarShown) {
        avatar.style.right = '-230px';
    } else {
        avatar.style.right = '0px';
    }
    avatarShown = !avatarShown;
    
}

function getNumWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function isEmpty(str) {
    return !str || str.trim().length === 0;
}