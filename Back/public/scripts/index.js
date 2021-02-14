function logoClicked() {
    MainPage.showMainPage();
}

let userLoggedIn = false;
const userService = UserService.getInstance();
const carService = CarService.getInstance();
const fixedDataService = FixedDataService.getInstance();

window.onload = () => {
    setUpRouter();
    MainPage.showMainPage();
    removePreload();
    addShowFilterMediaListener();
    setUpUser();
}

function setUpRouter() {
    let router = new Router();
    window.addEventListener("popstate", () => {
        router.run();
    });
}

function removePreload() {
    document.body.classList.remove("preload");
}

function mainMenuItemClicked() {
    logoClicked();
    closeBurgerMenu();
}

let burgerMenuShown = false, avatarShown = false, filtersShown = true;

function closeBurgerMenu() {
    if (burgerMenuShown) {
        burgerMenuClicked();
    }
}

function burgerMenuClicked() {
    if (avatarShown) {
        UserComponent.avatarClicked();
    }
    let burgerMenu = document.querySelector(".burger-menu-items");
    let burgerMenuImg = document.getElementById('burger-menu-img');
    if (burgerMenuShown) {
        burgerMenuImg.src = './resources/burger.png';
        burgerMenu.style.left = '-230px';
    } else {
        burgerMenuImg.src = './resources/close.png';
        burgerMenu.style.left = '0px';
    }
    burgerMenuShown = !burgerMenuShown;
}

function addShowFilterMediaListener() {
    const filtersMediaQuery = window.matchMedia('(min-width: 601px)');

    function filtersMediaChanged(e) {
        let filtersElem = document.querySelector('.filters');
        if (ObjectUtils.isNotNullOrUndefined(filtersElem)) {
            if (e.matches) {
                filtersElem.style['height'] = "500px";
                filtersElem.style['padding-top'] = "unset";
                filtersElem.style['padding-bottom'] = "unset";
            } else {
                if (filtersShown) {
                    filtersShown = false;
                }
                filtersElem.style['height'] = "0";
                filtersElem.style['padding-top'] = "0";
                filtersElem.style['padding-bottom'] = "0";
            }
        }
    }

    filtersMediaQuery.addEventListener('change', filtersMediaChanged);
    filtersMediaChanged(filtersMediaQuery);
}

function setUpUser() {
    if (!StringUtils.isEmpty(SessionUtils.getUsername())) {
        UserComponent.userHasLoggedIn(SessionUtils.getUsername());
    }
}