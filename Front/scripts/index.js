function logoClicked() {
    showMainPage();
}

let userLoggedIn = false;
const userService = UserService.getInstance();
const carService = CarService.getInstance();

window.onload = () => {
    showMainPage();
    removePreload();
}

function removePreload() {
    document.body.classList.remove("preload");
}

function mainMenuItemClicked() {
    logoClicked();
    closeBurgerMenu();
}

let burgerMenuShown = false, avatarShown = false;

function closeBurgerMenu() {
    if (burgerMenuShown) {
        burgerMenuClicked();
    }
}

function burgerMenuClicked() {
    if (avatarShown) {
        avatarClicked();
    }
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