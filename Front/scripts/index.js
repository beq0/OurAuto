window.onload = () => {
    // DOMUtils.setInnerHTML("content", getFilteredCarsHTML(null));
    logoClicked();
    DOMUtils.setInnerHTML("main-user", userName + " " + userFamilyName);
    DOMUtils.setInnerHTML("avatar-user", userName + " " + userFamilyName);
    removePreload();
}

function mainUserClicked() {
    DOMUtils.setScreenContent(getUserInfoHTML(null));
}

function avatarUserClicked() {
    DOMUtils.setScreenContent(getUserInfoHTML(null));
}

function userClicked(userId) {
    DOMUtils.setScreenContent(getUserInfoHTML(userId));
}

function removePreload() {
    document.body.classList.remove("preload");
}

function mainMenuItemClicked() {
    logoClicked();
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

function avatarClicked() {
    if (burgerMenuShown) {
        burgerMenuClicked();
    }
    let avatar = document.getElementById("avatar-content");
    if (avatarShown) {
        avatar.style.right = '-230px';
    } else {
        avatar.style.right = '0px';
    }
    avatarShown = !avatarShown;   
}