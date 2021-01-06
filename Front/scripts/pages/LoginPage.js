function showLoginPage() {
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
        
        <button id="login-login-button" onclick="loginUser()">
            შესვლა
        </button>

        <div class="login-register">
            <div class="login-label">არ ხართ დარეგისტრირებული?</div>

            <button id="login-register-button" onclick="UserComponent.registerButtonClicked()">
                რეგისტრაცია
            </button>
        </div>
    </div>
    `)
    bindEntersOnLoginPage();
}

function loginUser() {
    const username = DOMUtils.getValueById("login-username");
    const password = DOMUtils.getValueById("login-password");
    userService.authenticate(username, password, (user) => {
        SessionUtils.setUsername(username);
        showMainPage();
        UserComponent.userHasLoggedIn(user);
    });
}

function bindEntersOnLoginPage() {
    function executeLogin() {
        document.getElementById('login-login-button').click();
    }
    DOMUtils.bindEnterToElementById('login-username', executeLogin);
    DOMUtils.bindEnterToElementById('login-password', executeLogin);
}