/// <reference path="../../vendor/_references.js" />
/// <reference path="../../vendor/angularjs/angular.js" />
/// <reference path="../_config.js" />
/// <reference path="../../vendor/angularjs/angular-route.js" />

//路由模块
(function () {
    var route = angular.module(AutoHome.ngModules.route, ["ngRoute"]);
    route.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl:"app/home/home.tpl.html",
                controller:"HomeCtrl as main"
            })
            .when("/bindCar/list", {
                templateUrl: "app/bindCar/bindCar.list.tpl.html",
                controller:"BindCarListCtrl as main"
            })
            .when("/bindCar/detail/:id", {
                templateUrl:"app/bindCar/bindCar.detail.tpl.html",
                controller: "BindCarDetailCtrl as main"
            })
            .otherwise("/");
    });

})();