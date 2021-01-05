function getUserInfoHTML(usrename) {
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

        <div class="u-contact-buttons">
            <div class="u-contact-button u-add-friend" onclick="addFriendClicked()">
                <img src="resources/addFriend.jpg">
                მეგობრებში დამატება
            </div>

            <div class="u-contact-button u-contact" onclick="contactClicked()">
                <img src="resources/message.png">
                დაკავშირება
            </div>
        </div>

        <div class="u-cars">
            <div class="u-cars-label">
                მომხმარებლის განცხადებები
            </div>`;
            
            // TODO: replace this with car's service's getCarsForUser response
            cars.forEach(car => {
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


function addFriendClicked() {
    alert("დამატებულია მეგობრებში");
}

function contactClicked() {
    alert("მესიჯი მიწერილია");
}