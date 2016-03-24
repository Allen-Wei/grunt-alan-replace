/// <reference path="../_config.js" />
/// <reference path="../../vendor/angularjs/angular.js" />
/// <reference path="../services/shop.js" />

/*
 * 绑定爱车
 * author: Alan
 * created: 2016-03-21 15:24
 * lasted: 2016-03-21
 */

(function () {

    angular
        .module(AutoHome.ngModules.modules + ".BindCar", [
            AutoHome.ngModules.services + ".Shop"
        ])
        //店铺列表
        .controller("BindCarListCtrl", function (ShopSvc) {
            var self = this;
            this.shops = [];
            ShopSvc.getShops().then(function (rep) {
                self.shops = rep || [];
            }, function () {
            });
        })
        //店铺详情
        .controller("BindCarDetailCtrl", function ($routeParams, ShopSvc) {
            var carid = parseInt($routeParams.id);
            if (!$routeParams.id || isNaN(carid)) {
                alert("店铺Id不能为空");
                return;
            }
            var self = this;
            ShopSvc.getCars(carid).then(function (rep) {
                self.info = rep;
            }, function (rep) {
                alert(rep);
            });
        });
})();


/// <reference path="../_config.js" />
/// <reference path="../services/user.js" />
/// <reference path="../../vendor/angularjs/angular.js" />

/*
 * 主页
 * 选择: 我是车主, 我是买家
 * author: Alan
 * created: 2016-03-21
 */

(function () {
    angular.module(AutoHome.ngModules.modules + ".Home", [
        AutoHome.ngModules.services + ".User"
    ]).controller("HomeCtrl", function (UserSvc, $location) {

        this.categories = ["buyer", "owner"];

        this.error = "";
        this.select = function (category) {
            if (this.categories.indexOf(category) === -1) {
                this.error = "错误的选项: " + category;
                return;
            }
            this.error = category;
            UserSvc.type = category;

            $location.path("/bindCar/list");
        };
    });
})();


/// <reference path="../_config.js" />
/// <reference path="../../vendor/angularjs/angular.js" />

/*
 * 我是车主
 *      填写车主信息
 *      个人中心
 *      订单记录
 */
(function () {
    angular.module(AutoHome.ngModules.modules + ".Owner", [])
        .controller("OwnerBind", function (CarNoSvc) {
            var self = this;
            this.carNoPrefixes = [];

            this.form = {
                name: undefined,
                mobile: undefined,
                carNoPrefix: undefined,
                carNo: undefined
            };
            CarNoSvc.getCarNoPrefix().then(function (rep) {
                self.carNoPrefixes = rep;
                self.form.carNoPrefix = self.carNoPrefixes[0];
            });

        })
    .factory("CarNoSvc", function ($q) {

        var service = {
            getCarNoPrefix: function () {
                var defer = $q.defer();
                defer.resolve([{
                    id: 1,
                    value: "京"
                }, {
                    id: 2,
                    value: "津"
                }, {
                    id: 3,
                    value: "冀"
                }]);
                return defer.promise;
            }
        };
        return service;

    });
})();

