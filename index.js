let userUsername = 'beq0';
let userName = 'ბექა';
let userFamilyName = 'გუგულაშვილი';
let userPhoneNumber = '+995555555555';

let burgerMenuShown = false, avatarShown = false;

let cars = [
    {
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
    removePreload();
    
    document.getElementById("logo").addEventListener('click', () => {
        setInnerHTML("content", getcarsHTML(null));
    });
    
    document.getElementById("main-user").addEventListener('click', () => {
        setInnerHTML("content", getUserInfoHTML(null));
    });
    
    document.getElementById("avatar-user").addEventListener('click', () => {
        setInnerHTML("content", getUserInfoHTML(null));
    });
    
    document.getElementById("filter-button").addEventListener('click', () => {
        filter = {
            model: getValueById('filter-car-model'),
            yearLower: parseInt(getValueById('filter-car-year-lower')),
            yearUpper: parseInt(getValueById('filter-car-year-upper')),
            motor: parseFloat(getValueById('filter-car-motor')),
            transmission: getValueById('filter-car-transmission')
        }
        setInnerHTML("content", getcarsHTML(filter));
    });
}

function removePreload() {
    document.body.classList.remove("preload");
}

function setInnerHTML(id, html) {
    document.getElementById(id).innerHTML = html;
}

function getValueById(id) {
    return document.getElementById(id).value;
}

function getcarsHTML(filter) {
    console.log(filter);
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
            <img src="${car.image}">

            <div class="car-info">
                <div class="car-main-info">
                    <div class="car-price">
                        <span>${getNumWithCommas(car.price)}</span> ₾
                    </div>

                    <div>
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

function getUserInfoHTML() {
    userinfoHTML = 
    `
    <div>
        ${userUsername}
    </div>

    <div>
        ${userName}
    </div>
    
    <div>
        ${userFamilyName}
    </div>

    <div>
        ${userPhoneNumber}
    </div>
    `
    return userinfoHTML;
}


function burgerMenuClicked() {
    // alert("dsja");
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