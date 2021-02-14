class UserComponent {
    constructor() {

    }

    static userHasLoggedIn(username = null) {
        DOMUtils.setInnerHTML('user-info', 
        `
        <a href="#user" id="main-user" class="user">
            ${username}
        </a>
        
        <div>
            <button id="logout-button">
                გასვლა
            </button>
        </div>
        `);

        DOMUtils.setOnClickById('logout-button', this.logoutButtonClicked);
    
        DOMUtils.setInnerHTML('avatar-content',
        `
        <a href="#user" id="avatar-user" class="avatar-content-item">
            ${username}
        </a>
        
        <div>
            <button id="avatar-logout-button" class="avatar-content-item">
                გასვლა
            </button>
        </div>
        `);
        
        DOMUtils.setOnClickById('avatar-logout-button', this.logoutButtonClicked);
    }
    
    static userHasLoggedOut() {
        DOMUtils.setInnerHTML('user-info', 
        `
        <a href="#login">
            <button id="login-button">
                შესვლა
            </button>
        </a>
        
        <a href="#register">
            <button id="register-button">
                რეგისტრაცია
            </button>
        </a>
        `);
    
        DOMUtils.setInnerHTML('avatar-content',
        `
        <a href="#login">
            <button id="avatar-login-button" class="avatar-content-item">
                შესვლა
            </button>
        </a>

        <a href="#register">
            <button id="avatar-register-button" class="avatar-content-item">
                რეგისტრაცია
            </button>
        </a>
        `);
    }
    
    static loginButtonClicked() {
        LoginPage.showLoginPage();
        UserComponent.closeAvatar();
        MainPage.hideShowFilterButton();
    }
    
    static registerButtonClicked() {
        RegisterPage.showRegisterPage();
        UserComponent.closeAvatar();
        MainPage.hideShowFilterButton();
    }
    
    static logoutButtonClicked() {
        SessionUtils.removeUsername();
        UserComponent.userHasLoggedOut();
        UserComponent.closeAvatar();
    }
    
    static mainUserClicked() {
        UserPage.showUserPage(SessionUtils.getUsername(), true);
        MainPage.hideShowFilterButton();
    }
    
    static avatarUserClicked() {
        UserPage.showUserPage(SessionUtils.getUsername(), true);
        UserComponent.closeAvatar();
    }
    
    // mainly called from Car Page (from similar cars)
    static userClicked(username) {
        UserPage.showUserPage(username, false);
        MainPage.hideShowFilterButton();
    }

    static closeAvatar() {
        if (avatarShown) {
            this.avatarClicked();
        }
    }

    static avatarClicked() {
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
}
