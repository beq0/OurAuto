class AjaxRequest {
    constructor() {
    }

    static get(url) {
        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.onload = function() {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(new Error(this.responseText));
                }
            };
            request.onerror = function() {
                reject(new Error(this.responseText));
            };
            request.send();
        });
    }
}