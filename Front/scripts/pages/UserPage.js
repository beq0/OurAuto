class UserPage {
    constructor() {

    }

    static getUserInfoHTML(username, isMainUser) {
        // TODO: replace this with userService's findUser(username) response
        let userinfoHTML = 
        `
        <div class="u-container">
            <div class="u-u">
                <div class="u-img">
                    <img src="resources/user.png">
                </div>
    
                <div class="u-main-info">
                    <div class="u-info u-username">
                        ${userUsername}
                    </div>
                
                    <div class="u-info">
                        ${userName}
                    </div>
                    
                    <div class="u-info">
                        ${userFamilyName}
                    </div>
                
                    <div class="u-info">
                        ${userPhoneNumber}
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
                
                // TODO: replace this with car's service's getCarsForUser response
                tmp_cars.forEach(car => {
                userinfoHTML += 
                `
                <div class="u-car">
                    <img class="u-car-img" src="${car.image}" onclick="carClicked(${car.id})">
        
                    <div class="u-car-info">
                        <div class="u-car-main-info">
                            <div class="u-car-price">
                                <span>${NumberUtils.getNumWithCommas(car.price)}</span> ₾
                            </div>
        
                            <div class="u-car-model" onclick="carClicked(${car.id})">
                                <span>${car.model}</span>
                            </div>
                        </div>
                        
                        <div class="u-car-general-info">
                            <div>
                                წელი: <span>${car.year}</span>
                            </div>
        
                            <div>
                                ძრავი: <span>${car.motor}</span>
                            </div>
                        
                            <div>
                                ტრანსმისია: <span>${car.transmission}</span>
                            </div>
        
                            <div>
                                გარბენი: <span>${NumberUtils.getNumWithCommas(car.mileage)}</span> კმ
                            </div>
        
                            <div>
                                ტექ. დათვალიერება: <span>${car.techView ? 'კი' : 'არა'}</span>
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