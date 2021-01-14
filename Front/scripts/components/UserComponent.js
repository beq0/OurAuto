class UserComponent {
    constructor() {

    }

    static userHasLoggedIn(user = null) {
        DOMUtils.setInnerHTML('user-info', 
        `
        <div id="main-user" class="user">
            ${user.username}
        </div>
        
        <div>
            <button id="logout-button">
                გასვლა
            </button>
        </div>
        `);

        DOMUtils.setOnClickById('main-user', this.mainUserClicked);
        DOMUtils.setOnClickById('logout-button', this.logoutButtonClicked);
    
        DOMUtils.setInnerHTML('avatar-content',
        `
        <div id="avatar-user" class="avatar-content-item">
            ${user.username}
        </div>
        
        <div>
            <button id="avatar-logout-button" class="avatar-content-item">
                გასვლა
            </button>
        </div>
        `);
        
        DOMUtils.setOnClickById('avatar-user', this.avatarUserClicked);
        DOMUtils.setOnClickById('avatar-logout-button', this.logoutButtonClicked);
    }
    
    static userHasLoggedOut() {
        DOMUtils.setInnerHTML('user-info', 
        `
        <button id="login-button">
            შესვლა
        </button>

        <button id="register-button">
            რეგისტრაცია
        </button>
        `);

        DOMUtils.setOnClickById('login-button', this.loginButtonClicked);
        DOMUtils.setOnClickById('register-button', this.registerButtonClicked);
    
        DOMUtils.setInnerHTML('avatar-content',
        `
        <button id="avatar-login-button" class="avatar-content-item">
            შესვლა
        </button>

        <button id="avatar-register-button" class="avatar-content-item">
            რეგისტრაცია
        </button>
        `);

        DOMUtils.setOnClickById('avatar-login-button', this.loginButtonClicked);
        DOMUtils.setOnClickById('avatar-register-button', this.registerButtonClicked);
    }
    
    static loginButtonClicked() {
        LoginPage.showLoginPage();
        UserComponent.closeAvatar();
    }
    
    static registerButtonClicked() {
        RegisterPage.showRegisterPage();
        UserComponent.closeAvatar();
    }
    
    static authenticate() {
        UserComponent.userHasLoggedIn({username: 'beq0'});
    }
    
    static logoutButtonClicked() {
        SessionUtils.removeUsername();
        UserComponent.userHasLoggedOut();
        UserComponent.closeAvatar();
    }
    
    static mainUserClicked() {
        UserPage.showUserPage(SessionUtils.getUsername(), true);
    }
    
    static avatarUserClicked() {
        UserPage.showUserPage(SessionUtils.getUsername(), true);
        UserComponent.closeAvatar();
    }
    
    // mainly called from Car Page (from similar cars)
    static userClicked(username) {
        UserPage.showUserPage(username, false);
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
