"use strict";
define(function() {
    var app = angular.module("app", ["ui.router"]);

    app.init = function() {
        angular.bootstrap(document, ["app"]);
    };

    app.config([
        "$stateProvider",
        "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "/home.html",
                    controller: "HomeController"
                })
                .state("posts", {
                    url: "/posts/{id}",
                    templateUrl: "/posts.html",
                    controller: "PostsController"
                });

            $urlRouterProvider.otherwise("home");
        }
    ]);



    /*app.controller("AppController", [
        "$scope",
        function($scope) {

            $scope.posts = [
                "1",
                "2",
                "3",
                "4",
                "5"
            ];

            $scope.click = function() {
                $scope.posts = [
                    "6",
                    "7",
                    "8",
                    "9",
                    "0"
                ];
            };
        }
    ]);*/

})();