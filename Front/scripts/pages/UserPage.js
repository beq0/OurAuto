class UserPage {
    constructor() {

    }

    static getUserInfoHTML(user, userCars, isMainUser) {
        let userinfoHTML = 
        `
        <div class="u-container">
            <div class="u-u">
                <div class="u-img">
                    <img src="resources/user.png">
                </div>
    
                <div class="u-main-info">
                    <div class="u-info u-username">
                        ${user.username}
                    </div>
                
                    <div class="u-info">
                        ${user.name}
                    </div>
                
                    <div class="u-info">
                        ${user.mobile}
                    </div>
                </div>
            </div>
    
            ${isMainUser ?
            `<div class="u-add-car">
                <div class="u-add-car-button" onclick="UserPage.addCarButtonClicked()">მანქანის დამატება</div>
            </div>`
            : 
            `<div class="u-contact-buttons">
                <div class="u-contact-button u-add-friend" onclick="UserPage.addFriendClicked()">
                    <img src="resources/addFriend.jpg">
                    მეგობრებში დამატება
                </div>
    
                <div class="u-contact-button u-contact" onclick="UserPage.contactClicked()">
                    <img src="resources/message.png">
                    დაკავშირება
                </div>
            </div>`}
    
            <div class="u-cars">
                <div class="u-cars-label">
                    ${isMainUser ? 'ჩემი' : 'მომხმარებლის'} განცხადებები
                </div>`;
                
                userCars.forEach(car => {
                userinfoHTML += 
                `
                <div class="u-car">
                    <img class="u-car-img" src="${car.imagePath}" onclick="CarPage.carClicked('${car._id}')">
        
                    <div class="u-car-info">
                        <div class="u-car-main-info">
                            <div class="u-car-price">
                                <span>${NumberUtils.getNumWithCommas(car.price)}</span> ₾
                            </div>

                            <div class="u-car-model" onclick="CarPage.carClicked('${car._id}')">
                                <span>${car.mark}</span>
                            </div>
        
                            <div class="u-car-model" onclick="CarPage.carClicked('${car._id}')">
                                <span>${car.model}</span>
                            </div>
                        </div>
                        
                        <div class="u-car-general-info">
                            <div>
                                წელი: <span>${car.year}</span>
                            </div>
        
                            <div>
                                ძრავი: <span>${car.engine}</span>
                            </div>
                        
                            <div>
                                ტრანსმისია: <span>${car.transmission}</span>
                            </div>
        
                            <div>
                                გარბენი: <span>${NumberUtils.getNumWithCommas(car.mileage)}</span> კმ
                            </div>
                        </div>
                    </div>
                </div>
                `;});
            userinfoHTML += 
            `    
            </div>
            
        </div>
        `
        return userinfoHTML;
    }

    static showUserPage(username, isMainUser) {
        if (!isMainUser) {
            isMainUser = SessionUtils.getUsername() == username;
        }
        Promise.all([
            userService.findUser(username),
            carService.getCarsForUser(username)
        ]).then((userInfo) => {
            DOMUtils.setScreenContent(this.getUserInfoHTML(userInfo[0], userInfo[1], isMainUser));
        }).catch((err) => {
            console.error(err);
        });
    }
    
    static addCarButtonClicked() {
        CarModal.showCarModal();
    }

    static addFriendClicked() {
        alert("დამატებულია მეგობრებში");
    }
    
    static contactClicked() {
        alert("მესიჯი მიწერილია");
    }
}