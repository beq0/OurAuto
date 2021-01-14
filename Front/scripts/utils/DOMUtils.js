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
}