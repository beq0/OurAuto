class LoginPage {
    constructor() {
        
    }

    static showLoginPage() {
        if (StringUtils.isEmpty(SessionUtils.getUsername())) {
            DOMUtils.setScreenContent(
                `
                <div class="login-container">
                    <div class="login-input">
                        <div class="login-label">მომხმარებლის სახელი</div>
                        <input id="login-username" type="text">
                    </div>
                    
                    <div class="login-input">
                        <div class="login-label">პაროლი</div>
                        <input id="login-password" type="password">
                    </div>
                    
                    <button id="login-login-button">
                        შესვლა
                    </button>
            
                    <div class="login-register">
                        <div class="login-label">არ ხართ დარეგისტრირებული?</div>
            
                        <a href="#register">
                            <button id="login-register-button">
                                რეგისტრაცია
                            </button>
                        </a>
                    </div>
                </div>
                `);
            this.bindEntersOnLoginPage();
    
            DOMUtils.setOnClickById('login-login-button', this.loginUser);
        } else {
            DOMUtils.setScreenContent(
                `
                <div class="login-container login-logout-container">
                    <div class="login-logout-label">
                        თქვენ უკვე ხართ ავტორიზებული
                    </div>

                    <button id="login-logout-button">
                        გასვლა
                    </button>
                </div>
                `);
            DOMUtils.setOnClickById('login-logout-button', () => {
                UserComponent.logoutButtonClicked();
                this.showLoginPage();
            });  
        }  
    }
    
    static loginUser() {
        const username = DOMUtils.getValueById("login-username");
        const password = DOMUtils.getValueById("login-password");
        userService.authenticate(username, password)
            .then((user) => {
                SessionUtils.setUsername(username);
                MainPage.showMainPage();
                UserComponent.userHasLoggedIn(username);
            })
            .catch((err) => {
                console.error(err);
            });
    }
    
    static bindEntersOnLoginPage() {
        function executeLogin() {
            document.getElementById('login-login-button').click();
        }
        DOMUtils.bindEnterToElementById('login-username', executeLogin);
        DOMUtils.bindEnterToElementById('login-password', executeLogin);
    }
}