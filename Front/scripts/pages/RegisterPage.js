class RegisterPage {
    constructor() {

    }

    static showRegisterPage() {
        DOMUtils.setScreenContent(
        `
        <div class="register-container">
            <div class="register-input">
                <div class="register-label">სახელი</div>
                <input id="register-name" type="text"">
            </div>
            
            <div class="register-input">
                <div class="register-label">მომხმარებლის სახელი</div>
                <input id="register-username" type="text">
            </div>
            
            <div class="register-input">
                <div class="register-label">მობილურის ნომერი</div>
                <input id="register-mobile" type="tel">
            </div>
            
            <div class="register-input">
                <div class="register-label">პაროლი</div>
                <input id="register-password" type="password"">
            </div>
            
            <button id="register-register-button">
                რეგისტრაცია
            </button>
        </div>
        `);
        this.bindEntersOnRegisterPage();

        DOMUtils.setOnClickById('register-register-button', this.registerUser);
    }
    
    static registerUser() {
        const user = {
            name: DOMUtils.getValueById("register-name"),
            username: DOMUtils.getValueById("register-username"),
            mobile: DOMUtils.getValueById("register-mobile"),
            password: DOMUtils.getValueById("register-password")
        }
        userService.addUser(user)
            .then(() => {
                SessionUtils.setUsername(user.username);
                MainPage.showMainPage();
                UserComponent.userHasLoggedIn(user);
            })
            .catch((err) => {
                console.error(err);
            });
    }
    
    static bindEntersOnRegisterPage() {
        function executeRegister() {
            document.getElementById('register-register-button').click();
        }
        DOMUtils.bindEnterToElementById('register-name', executeRegister);
        DOMUtils.bindEnterToElementById('register-username', executeRegister);
        DOMUtils.bindEnterToElementById('register-mobile', executeRegister);
        DOMUtils.bindEnterToElementById('register-password', executeRegister);
    }
}