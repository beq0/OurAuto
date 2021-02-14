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
                        <img id="car-modal-close-button" src="./resources/close-modal.png">
                    </div>

                    <div class="car-modal-fields">    
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">მწარმოებელი: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <select class="car-modal-field-input" name="car-modal-brands" id="car-modal-brand" required
                            oninvalid="this.setCustomValidity('საჭიროა მწარმოებლის მითითება')" oninput="this.setCustomValidity('')">
                            
                            </select>
                        </div>
            
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">მოდელი: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <select class="car-modal-field-input" name="car-modal-models" id="car-modal-model" required
                            oninvalid="this.setCustomValidity('საჭიროა მოდელის მითითება')" oninput="this.setCustomValidity('')">
                            
                            </select>
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">გარიგების ტიპი: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <select class="car-modal-field-input" name="car-modal-sell-types" id="car-modal-sell-type" required
                            oninvalid="this.setCustomValidity('საჭიროა გარიგების ტიპის მითითება')" oninput="this.setCustomValidity('')">
                            
                            </select>
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">კატეგორია: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <select class="car-modal-field-input" name="car-modal-categories" id="car-modal-category" required
                            oninvalid="this.setCustomValidity('საჭიროა კატეგორიის მითითება')" oninput="this.setCustomValidity('')">
                            
                            </select>
                        </div>
                        
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">წელი: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <input id="car-modal-year" class="car-modal-field-input" type="number" required
                            oninvalid="this.setCustomValidity('საჭიროა წელის მითითება')" oninput="this.setCustomValidity('')">
                        </div>
            
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">გარბენი: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <input id="car-modal-mileage" class="car-modal-field-input" type="number" required
                            oninvalid="this.setCustomValidity('საჭიროა გარბენის მითითება')" oninput="this.setCustomValidity('')">
                        </div>
            
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ძრავი: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <input id="car-modal-engine" class="car-modal-field-input" type="number" required
                            oninvalid="this.setCustomValidity('საჭიროა ძრავის მითითება')" oninput="this.setCustomValidity('')" step="0.01">
                        </div>
            
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ტრანსმისია: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <select class="car-modal-field-input" name="car-modal-transmissions" id="car-modal-transmission" required
                            oninvalid="this.setCustomValidity('საჭიროა ტრანსმისიის მითითება')" oninput="this.setCustomValidity('')">
                            
                            </select>
                        </div>
            
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">საწვავი: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <select class="car-modal-field-input" name="car-modal-fuel-types" id="car-modal-fuel-type" required
                            oninvalid="this.setCustomValidity('საჭიროა საწვავის მითითება')" oninput="this.setCustomValidity('')">
                            
                            </select>
                        </div>
            
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">განბაჟება: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <select class="car-modal-field-input" name="car-modal-custom-types" id="car-modal-custom-type" required
                            oninvalid="this.setCustomValidity('საჭიროა განბაჟების მითითება')" oninput="this.setCustomValidity('')">
                            
                            </select>
                        </div>
            
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">საჭე: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <select class="car-modal-field-input" name="car-modal-wheels" id="car-modal-wheel" required
                            oninvalid="this.setCustomValidity('საჭიროა საჭის მითითება')" oninput="this.setCustomValidity('')">
                            
                            </select>
                        </div>
            
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">მდებარეობა: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <select class="car-modal-field-input" name="car-modal-positions" id="car-modal-position" required
                            oninvalid="this.setCustomValidity('საჭიროა მდებარეობის მითითება')" oninput="this.setCustomValidity('')">
                            
                            </select>
                        </div>
            
                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ფასი: <b style="color: red;" title="საჭირო ველი">*</b></div>
                            <input id="car-modal-price" class="car-modal-field-input" type="number" required
                            oninvalid="this.setCustomValidity('საჭიროა ფასის მითითება')" oninput="this.setCustomValidity('')">
                        </div>           

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ცილინდრები:</div>
                            <input id="car-modal-cylinders" class="car-modal-field-input" type="number">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">კარები:</div>
                            <input id="car-modal-doors" class="car-modal-field-input" type="number">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ფერი:</div>
                            <input id="car-modal-color" class="car-modal-field-input" type="text">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">სალონის ფერი:</div>
                            <input id="car-modal-interiorColor" class="car-modal-field-input" type="text">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">აირბეგი:</div>
                            <input id="car-modal-airbags" class="car-modal-field-input" type="number">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ტყავის სალონი:</div>
                            <input id="car-modal-leatherInterior" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ABS:</div>
                            <input id="car-modal-ABS" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ელ. შუშები:</div>
                            <input id="car-modal-electronicWindows" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">კონდინციონერი:</div>
                            <input id="car-modal-conditioner" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">კლიმატკონტროლი:</div>
                            <input id="car-modal-climateControl" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">დისკები:</div>
                            <input id="car-modal-disks" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ნავიგაცია:</div>
                            <input id="car-modal-navigation" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ცენტრალური საკეტი:</div>
                            <input id="car-modal-centralLock" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ლუქი:</div>
                            <input id="car-modal-upperWindow" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">სიგნალიზაცია:</div>
                            <input id="car-modal-signalization" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ბორტკომპიუტერი:</div>
                            <input id="car-modal-bortComputer" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ჰიდრავლიკა:</div>
                            <input id="car-modal-hidraulic" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ანტი-მოცურება:</div>
                            <input id="car-modal-antiSlide" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">სავარძლების გათბობა:</div>
                            <input id="car-modal-seetHeating" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">პარკინგკონტროლი:</div>
                            <input id="car-modal-parkingControl" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">უკანა ხედვის კამერა:</div>
                            <input id="car-modal-backViewCamera" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">კრუზკონტროლი:</div>
                            <input id="car-modal-cruzeControl" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">სტარტ/სტოპ სისტემა:</div>
                            <input id="car-modal-startStopSystem" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">სავარძლების მემორი:</div>
                            <input id="car-modal-seatMemory" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">სანისლე ფარები:</div>
                            <input id="car-modal-fogHeadlights" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">AUX:</div>
                            <input id="car-modal-AUX" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">Bluetooth:</div>
                            <input id="car-modal-BlueTooth" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">მულტი საჭე:</div>
                            <input id="car-modal-multiWheel" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">ტექ. დათვალიერება:</div>
                            <input id="car-modal-techView" class="car-modal-field-input-checkbox" type="checkbox">
                        </div>

                        <div class="car-modal-field">
                            <div class="car-modal-field-label">სურათი:</div>
                            <input id="car-modal-image" type="file" accept="image/*">
                        </div>

                    </div>

                    <div id="car-modal-buttons" class="car-modal-field">
                        <input id="car-modal-submit" class="car-modal-field-input" type="submit" value="დამატება">
        
                        <input id="car-modal-exit" class="car-modal-field-input" type="button" value="დახურვა">
                    </div>
                </form>
            </div>
            `
        );
        document.querySelector('.car-modal').addEventListener('submit', (e) => this.carModalSubmited(e));
        
        DOMUtils.setOnClickById('car-modal-close-button', this.exitCarModal);
        DOMUtils.setOnClickById('car-modal-exit', this.exitCarModal);

        Promise.all([
            fixedDataService.getBrands(),
            fixedDataService.getSellTypes(),
            fixedDataService.getCategories(),
            fixedDataService.getTransmissions(),
            fixedDataService.getFuelTypes(),
            fixedDataService.getCustomTypes(),
            fixedDataService.getWheels(),
            fixedDataService.getPositions(),
        ]).then((fixedDatas) => {
            const Brands = CarModal.clearFromAllKeyword(fixedDatas[0]);
            const SellTypes = CarModal.clearFromAllKeyword(fixedDatas[1]);
            const Categories = CarModal.clearFromAllKeyword(fixedDatas[2]);
            const Transmissions = CarModal.clearFromAllKeyword(fixedDatas[3]);
            const FuelTypes = CarModal.clearFromAllKeyword(fixedDatas[4]);
            const CustomTypes = CarModal.clearFromAllKeyword(fixedDatas[5]);
            const Wheels = CarModal.clearFromAllKeyword(fixedDatas[6]);
            const Positions = CarModal.clearFromAllKeyword(fixedDatas[7]);
            
            DOMUtils.addOptionsToSelectById('car-modal-brand', Brands);
            let carBrandFilter = document.getElementById('car-modal-brand');
            carBrandFilter.onchange = () => {
                CarModal.fillModelOptions();
            }
            CarModal.fillModelOptions();
            DOMUtils.addOptionsToSelectById('car-modal-sell-type', SellTypes);
            DOMUtils.addOptionsToSelectById('car-modal-category', Categories);
            DOMUtils.addOptionsToSelectById('car-modal-transmission', Transmissions);
            DOMUtils.addOptionsToSelectById('car-modal-fuel-type', FuelTypes);
            DOMUtils.addOptionsToSelectById('car-modal-custom-type', CustomTypes);
            DOMUtils.addOptionsToSelectById('car-modal-wheel', Wheels);
            DOMUtils.addOptionsToSelectById('car-modal-position', Positions);
        }).catch((err) => {
            console.error(err);
        });
    }

    static clearFromAllKeyword(arr) {
        const ALL_KEYWORD = "ყველა";
        return arr.filter(e => e !== ALL_KEYWORD);
    }

    static fillModelOptions() {
        const chosenBrand = DOMUtils.getValueById('car-modal-brand');
        fixedDataService.getModelsForBrand(chosenBrand)
            .then((models) => {
                DOMUtils.removeAllOptionsForSelectById('car-modal-model');
                DOMUtils.addOptionsToSelectById('car-modal-model', CarModal.clearFromAllKeyword(models));
            })
            .catch((err) => {
                DOMUtils.removeAllOptionsForSelectById('car-modal-model');
            });
    }

    static carModalSubmited(e) {
        e.preventDefault();
        const image = DOMUtils.getFileById('car-modal-image');
        // if (ObjectUtils.isNotNullOrUndefined(image) && image.size > 2097152){
        //     alert("გთხოვთ ატვირთოთ 2MB-ზე მცირე ზომის სურათი!");
        //     return;
        // };
        const car = {
            username: SessionUtils.getUsername(),
            brand: DOMUtils.getValueById('car-modal-brand'),
            model: DOMUtils.getValueById('car-modal-model'),
            category: DOMUtils.getValueById('car-modal-category'),
            sellType: DOMUtils.getValueById('car-modal-sell-type'),
            year: DOMUtils.getValueById('car-modal-year'),
            mileage: DOMUtils.getValueById('car-modal-mileage'),
            engine: DOMUtils.getValueById('car-modal-engine'),
            transmission: DOMUtils.getValueById('car-modal-transmission'),
            fuelType: DOMUtils.getValueById('car-modal-fuel-type'),
            customType: DOMUtils.getValueById('car-modal-custom-type'),
            wheel: DOMUtils.getValueById('car-modal-wheel'),
            position: DOMUtils.getValueById('car-modal-position'),
            price: DOMUtils.getValueById('car-modal-price'),
            cylinders: DOMUtils.getValueById('car-modal-cylinders'),
            doors: DOMUtils.getValueById('car-modal-doors'),
            color: DOMUtils.getValueById('car-modal-color'),
            interiorColor: DOMUtils.getValueById('car-modal-interiorColor'),
            airbags: DOMUtils.getValueById('car-modal-airbags'),
            leatherInterior: document.getElementById('car-modal-leatherInterior').checked,
            ABS: document.getElementById('car-modal-ABS').checked,
            electronicWindows: document.getElementById('car-modal-electronicWindows').checked,
            conditioner: document.getElementById('car-modal-conditioner').checked,
            climateControl: document.getElementById('car-modal-climateControl').checked,
            disks: document.getElementById('car-modal-disks').checked,
            navigation: document.getElementById('car-modal-navigation').checked,
            centralLock: document.getElementById('car-modal-centralLock').checked,
            upperWindow: document.getElementById('car-modal-upperWindow').checked,
            signalization: document.getElementById('car-modal-signalization').checked,
            bortComputer: document.getElementById('car-modal-bortComputer').checked,
            hidraulic: document.getElementById('car-modal-hidraulic').checked,
            antiSlide: document.getElementById('car-modal-antiSlide').checked,
            seetHeating: document.getElementById('car-modal-seetHeating').checked,
            parkingControl: document.getElementById('car-modal-parkingControl').checked,
            backViewCamera: document.getElementById('car-modal-backViewCamera').checked,
            cruzeControl: document.getElementById('car-modal-cruzeControl').checked,
            startStopSystem: document.getElementById('car-modal-startStopSystem').checked,
            seatMemory: document.getElementById('car-modal-seatMemory').checked,
            fogHeadlights: document.getElementById('car-modal-fogHeadlights').checked,
            AUX: document.getElementById('car-modal-AUX').checked,
            BlueTooth: document.getElementById('car-modal-BlueTooth').checked,
            multiWheel: document.getElementById('car-modal-multiWheel').checked,
            techView: document.getElementById('car-modal-techView').checked,
            image: image
        }
        carService.addCar(car)
            .then(() => {
                this.exitCarModal();
                UserPage.showUserPage(SessionUtils.getUsername(), true);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    static exitCarModal() {
        DOMUtils.exitModal();
    }
}