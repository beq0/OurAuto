class Router {
    constructor() {
        this.routes = [
            { path: "", page: function(pars) {logoClicked();} },
            { path: "#", page: function(pars) {logoClicked();} },
            { path: "#main", page: function(pars) {logoClicked();} },
            { path: "#menu-main", page: function(pars) {
                logoClicked();
                closeBurgerMenu();} 
            },
            { path: "#login", page: function(pars) {UserComponent.loginButtonClicked();} },
            { path: "#register", page: function(pars) {UserComponent.registerButtonClicked();} },
            { path: "#parts", page: function(pars) {console.log('parts');} },
            { path: "#ganbajeba", page: function(pars) {console.log('ganbajeba');} },
            { path: "#contact", page: function(pars) {console.log('contact');} }
        ];
    }

    run() {
        let pathName = window.location.hash;
        const route = this.getRoute(pathName);
        if (route) {
            const urlParams = new URLSearchParams(window.location.search);
            route.page(urlParams)
        } else {
            document.body.innerHTML = 'Error 404! Page Not Found!';
        }
    }

    addRoute(path, page) {
        this.routes.push({
            path,
            page
        });
    }

    getRoute(path) {
        for (let i = 0; i < this.routes.length; i++) {
            const route = this.routes[i];
            if (route['path'] === path) {
                return route;
            }
        }
            
        return {path: "", page: function() {}};
    }

    routeExists(path) {
        return this.routes.filter(route => route.path === path).length !== 0;
    }
}