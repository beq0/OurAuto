class CarModal {
    constructor() {

    }

    static showCarModal() {
        DOMUtils.showModal(
            `
            <div class="modal-background"> 
                <form class="car-modal">
                    <div class="car-modal-close">
                        <div class="car-modal-label">მანქანის დამატება</div>
                        <img id="car-modal-close-button" src="./resources/close-modal.png" onclick="CarModal.exitCarModal()">
                    </div>
        
                    <div class="car-modal-field">
                        <div class="car-modal-field-label">მწარმოებელი:</div>
                        <input id="car-modal-mark" class="car-modal-field-input" type="text" required
                        oninvalid="this.setCustomValidity('საჭიროა მწარმოებლის მითითება')" oninput="this.setCustomValidity('')">
                    </div>
        
                    <div class="car-modal-field">
                        <div class="car-modal-field-label">მოდელი:</div>
                        <input id="car-modal-model" class="car-modal-field-input" type="text" required
                        oninvalid="this.setCustomValidity('საჭიროა მოდელის მითითება')" oninput="this.setCustomValidity('')">
                    </div>
                    
                    <div class="car-modal-field">
                        <div class="car-modal-field-label">წელი:</div>
                        <input id="car-modal-year" class="car-modal-field-input" type="number" required
                        oninvalid="this.setCustomValidity('საჭიროა წელის მითითება')" oninput="this.setCustomValidity('')">
                    </div>
        
                    <div class="car-modal-field">
                        <div class="car-modal-field-label">გარბენი:</div>
                        <input id="car-modal-mileage" class="car-modal-field-input" type="number" required
                        oninvalid="this.setCustomValidity('საჭიროა გარბენის მითითება')" oninput="this.setCustomValidity('')">
                    </div>
        
                    <div class="car-modal-field">
                        <div class="car-modal-field-label">ძრავი:</div>
                        <input id="car-modal-engine" class="car-modal-field-input" type="number" required
                        oninvalid="this.setCustomValidity('საჭიროა ძრავის მითითება')" oninput="this.setCustomValidity('')" step="0.01">
                    </div>
        
                    <div class="car-modal-field">
                        <div class="car-modal-field-label">ტრანსმისია:</div>
                        <input id="car-modal-transmission" class="car-modal-field-input" type="text" required
                        oninvalid="this.setCustomValidity('საჭიროა ტრანსმისიის მითითება')" oninput="this.setCustomValidity('')">
                    </div>
        
                    <div class="car-modal-field">
                        <div class="car-modal-field-label">ფასი:</div>
                        <input id="car-modal-price" class="car-modal-field-input" type="number" required
                        oninvalid="this.setCustomValidity('საჭიროა ფასის მითითება')" oninput="this.setCustomValidity('')">
                    </div>
        
                    <div class="car-modal-field">
                        <div class="car-modal-field-label">სურათი:</div>
                        <input id="car-modal-image" type="file" accept="image/*">
                    </div>

                    <div id="car-modal-buttons" class="car-modal-field">
                        <input id="car-modal-submit" class="car-modal-field-input" type="submit" value="დამატება">
        
                        <input id="car-modal-exit" class="car-modal-field-input" type="button" onclick="CarModal.exitCarModal()" value="დახურვა">
                    </div>
                </form>
            </div>
            `
        );
        document.querySelector('.car-modal').addEventListener('submit', (e) => this.carModalSubmited(e));
    }

    static carModalSubmited(e) {
        e.preventDefault();
        const image = DOMUtils.getFileById('car-modal-image');
        if (ObjectUtils.isNotNullOrUndefined(image) && image.size > 2097152){
            alert("გთხოვთ ატვირთოთ 2MB-ზე მცირე ზომის სურათი!");
            return;
        };
        const car = {
            username: SessionUtils.getUsername(),
            mark: DOMUtils.getValueById('car-modal-mark'),
            model: DOMUtils.getValueById('car-modal-model'),
            year: DOMUtils.getValueById('car-modal-year'),
            mileage: DOMUtils.getValueById('car-modal-mileage'),
            engine: DOMUtils.getValueById('car-modal-engine'),
            transmission: DOMUtils.getValueById('car-modal-transmission'),
            price: DOMUtils.getValueById('car-modal-price'),
            image: image
        }
        carService.addCar(car, () => {
            this.exitCarModal();
        });
    }

    static exitCarModal() {
        DOMUtils.exitModal();
    }
}