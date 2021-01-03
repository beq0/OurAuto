class Router {
    constructor() {
        this.routes = [
            { path: "/", page: null },
            { path: "/main", page: null },
            { path: "/parts", page: null },
            { path: "/ganbajeba", page: null },
            { path: "/contact", page: null }
        ];
    }

    run() {
        const route = this.getRoute(window.location.pathname);
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
        for (let route in this.routes) 
            if (route.path === path)
                return route;
        return {};
    }

    routeExists(path) {
        return this.routes.filter(route => route.path === path).length !== 0;
    }
}

window.onload = () => {
    let router = new Router();
    window.addEventListener("popstate", router.run());
    document.querySelectorAll('[router]').forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            window.history.pushState(null, null, event.target.route);
            router.run();
        })
    })
    router.run();
}