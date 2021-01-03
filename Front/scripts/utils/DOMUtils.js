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
}