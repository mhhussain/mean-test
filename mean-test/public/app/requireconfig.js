require.config({
    baseUrl: "/",
    paths: {
        "angular": "bower_components/angular/angular.min.js",
        "router": "bower_components/angular-ui-router/release/angular-ui-router.min.js",
        "modulepath": "app/modules"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "router": {
            deps: ["angular"]
        }
    }
});

require(["app/app"], function(app) {
    app.init()
});