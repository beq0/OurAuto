class Router {
    constructor() {
        this.routes = [
            { path: "", page: function(params) {MainPage.showMainPage();} },
            { path: "#", page: function(params) {MainPage.showMainPage();} },
            { path: "#main", page: function(params) {
                MainPage.showMainPage();
                closeBurgerMenu();
            } },
            { path: "#login", page: function(params) {UserComponent.loginButtonClicked();} },
            { path: "#register", page: function(params) {UserComponent.registerButtonClicked();} },
            { path: "#user", page: function(params) {UserComponent.mainUserClicked();} },
            { path: "#car-user", page: function(params) {UserComponent.userClicked(params['username']);} },
            { path: "#car", page: function(params) {CarPage.carClicked(params['carId']);} },
        ];
    }

    run() {
        let pathName = window.location.hash;
        let routeName = pathName;
        let params = {}
        const paramsIndex = pathName.indexOf('?');
        if (paramsIndex !== -1) {
            routeName = pathName.substring(0, paramsIndex);
            params = this.getParams(pathName.substring(paramsIndex + 1));
        }
        const route = this.getRoute(routeName);
        if (route) {
            route.page(params)
        } else {
            document.body.innerHTML = 'Error 404! Page Not Found!';
        }
    }

    getParams(url) {
        let result = {}
        const pairs = url.split('&');
        for (let i = 0; i < pairs.length; i++) {
            const currPair = pairs[i].split('=');
            result[currPair[0]] = currPair[1];
        }
        return result;
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