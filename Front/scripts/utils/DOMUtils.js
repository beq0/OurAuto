class DOMUtils {
    constructor() {
    }

    static setInnerHTML(id, html) {
        let elem = document.getElementById(id); 
        if (elem !== null) elem.innerHTML = html;
    }

    static setScreenContent(html) {
        document.querySelector('.filter-and-content').innerHTML = html;
    }

    static getValueById(id) {
        return document.getElementById(id).value;
    }

    static getFileById(id) {
        return document.getElementById(id).files[0];
    }

    static bindEnterToElementById(id, func) {
        document.getElementById(id).addEventListener("keyup", function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                func();
            }
        });
    }

    static showModal(modal) {
        document.getElementById('modal-container').innerHTML = modal;
    }

    static exitModal() {
        document.getElementById('modal-container').innerHTML = '';
    }

    static setOnClickById(id, func) {
        document.getElementById(id).onclick = func;
    }

    static setOnClickByClass(className, func) {
        document.querySelector('.' + className).onclick = func;
    }

    static addOptionToSelectById(id, option) {
        let select = document.getElementById(id);
        let optElem = document.createElement('option');
        optElem.value = option; 
        optElem.appendChild(document.createTextNode(option));
        select.appendChild(optElem); 
    }

    static addOptionsToSelectById(id, options) {
        options.forEach(option => this.addOptionToSelectById(id, option));
    }

    static removeAllOptionsForSelectById(id) {
        let select = document.getElementById(id);
        const len = select.options.length;
        for (let i = 0; i < len; i++) {
            select.removeChild(select.options[0]);
        }
    }
}