class UserComponent {
    constructor() {

    }

    static userHasLoggedIn(user = null) {
        DOMUtils.setInnerHTML('user-info', 
        `
        <div id="main-user" class="user" onclick="UserComponent.mainUserClicked()">
            ${user.username}
        </div>
        
        <div>
            <button id="logout-button" onclick="UserComponent.logoutButtonClicked()">
                გასვლა
            </button>
        </div>
        `);
    
        DOMUtils.setInnerHTML('avatar-content',
        `
        <div id="avatar-user" class="avatar-content-item" onclick="UserComponent.avatarUserClicked()">
            ${user.username}
        </div>
        
        <div>
            <button id="avatar-logout-button" class="avatar-content-item" onclick="UserComponent.logoutButtonClicked()">
                გასვლა
            </button>
        </div>
        `);
    }
    
    static userHasLoggedOut() {
        DOMUtils.setInnerHTML('user-info', 
        `
        <button id="login-button" onclick="UserComponent.loginButtonClicked()">
            შესვლა
        </button>

        <button id="register-button" onclick="UserComponent.registerButtonClicked()">
            რეგისტრაცია
        </button>
        `);
    
        DOMUtils.setInnerHTML('avatar-content',
        `
        <button id="avatar-login-button" class="avatar-content-item" onclick="UserComponent.loginButtonClicked()">
            შესვლა
        </button>

        <button id="avatar-register-button" class="avatar-content-item" onclick="UserComponent.registerButtonClicked()">
            რეგისტრაცია
        </button>
        `);
    }
    
    static loginButtonClicked() {
        showLoginPage();
        this.closeAvatar();
    }
    
    static registerButtonClicked() {
        showRegisterPage();
        this.closeAvatar();
    }
    
    static authenticate() {
        this.userHasLoggedIn({username: 'beq0'});
    }
    
    static logoutButtonClicked() {
        SessionUtils.removeUsername();
        this.userHasLoggedOut();
        this.closeAvatar();
    }
    
    static mainUserClicked() {
        UserPage.showUserPage(SessionUtils.getUsername(), true);
    }
    
    static avatarUserClicked() {
        UserPage.showUserPage(SessionUtils.getUsername(), true);
        this.closeAvatar();
    }
    
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
