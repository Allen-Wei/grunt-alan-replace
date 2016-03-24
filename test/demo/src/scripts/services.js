/// <reference path="../_config.js" />
/// <reference path="../../vendor/angularjs/angular.js" />


/*
 * 店铺相关服务
 * author: Alan
 * created: 2016-03-21 15:33
 */
(function () {
    angular.module(AutoHome.ngModules.services + ".Shop", [])
        .factory("ShopSvc", function ($http, $q) {

            //模拟数据
            var shops = [{
                id: 1,
                name: "北京路通威",
                image: "http://car0.autoimg.cn/logo/fct/75/130372751994064113.jpg",
                cars: [{ "name": "科鲁兹 2013款 掀背 1.6T 自动旗舰型", "image": "http://car0.autoimg.cn/carnews/2013/4/21/160x120_0_q87_20130421025511839-1.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "5门5座掀背车", "capacity": "1.6T" }, { "name": "赛欧 2015款 赛欧3 1.3L 手动理想版", "image": "http://car0.autoimg.cn/car/carnews/2015/2/10/160x120_0_q87_20150210204019777497110.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.3L" }, { "name": "科鲁兹 2015款 1.5L 经典 SL MT", "image": "http://car0.autoimg.cn/carnews/2014/9/19/160x120_0_q87_20140919202334464513211.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.5L" }, { "name": "爱唯欧 2014款 两厢 1.4SL AT 时尚版", "image": "http://car3.autoimg.cn/cardfs/product/g8/M05/11/FE/160x120_0_q87_autohomecar__wKgH3lZumYKAck0VAAUro4K3jFA578.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "5门5座两厢车", "capacity": "1.4L" }]
            }, {
                id: 2,
                name: "北京博瑞顺和",
                image: "http://car0.autoimg.cn/logo/fct/75/130372751994064113.jpg",
                cars: [{ "name": "科鲁兹 2015款 1.4T DCG旗舰版", "image": "http://car0.autoimg.cn/carnews/2014/8/13/160x120_0_q87_20140813073607139515311.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.4T" }, { "name": "科鲁兹 2015款 1.5L 手动时尚版", "image": "http://car0.autoimg.cn/car/carnews/2015/2/5/160x120_0_q87_2015020520383053821311.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.5L" }, { "name": "科鲁兹 2015款 1.5L 自动时尚导航版", "image": "http://car0.autoimg.cn/carnews/2014/11/24/160x120_0_q87_20141124180221362497110.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.5L" }, { "name": "科鲁兹 2015款 1.5L 手动精英版", "image": "http://car0.autoimg.cn/carnews/2014/11/25/160x120_0_q87_20141125014011201497111.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.5L" }, { "name": "科鲁兹 2015款 1.5L 自动豪华版", "image": "http://car0.autoimg.cn/carnews/2014/11/12/160x120_0_q87_20141112161648354513211.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.5L" }, { "name": "科鲁兹 2015款 1.4T 手动精英版", "image": "http://car0.autoimg.cn/carnews/2014/11/12/160x120_0_q87_20141112164836390513210.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.4T" }, { "name": "科鲁兹 2015款 1.4T DCG豪华版", "image": "http://car0.autoimg.cn/carnews/2014/9/26/160x120_0_q87_20140926151050339488511.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.4T" }, { "name": "科鲁兹 2015款 1.5L 经典 SL MT", "image": "http://car0.autoimg.cn/carnews/2014/9/19/160x120_0_q87_20140919202334464513211.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.5L" }]
            }, {
                id: 3,
                name: "北京奥嘉世茂金港奥迪中心",
                image: "http://dealer.autohome.com.cn/78109/?pvareaid=103707",
                cars: [{ "name": "奥迪A3 2015款 Limousine 35 TFSI 百万纪念舒享型 奥迪A3 2015款 Limousine 35 TFSI 百万纪念舒享型", "image": "http://car0.autoimg.cn/car/carnews/2015/6/22/160x120_0_q87_201506221117395285132110.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "1.4T" }, { "name": "奥迪Q7 2016款 45 TFSI S line运动型", "image": "http://car3.autoimg.cn/cardfs/product/g12/M05/04/FB/160x120_0_q87_autohomecar__wKjBy1ZlWSyAIlUnAAvRMoHgwqs512.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "5门5座SUV", "capacity": "3.0T" }, { "name": "奥迪A8 2016款 A8L 50 TFSI quattro豪华型", "image": "http://car3.autoimg.cn/cardfs/product/g21/M04/41/DF/160x120_0_q87_autohomecar__wKgFWla1Sk-AanQTAAer2TbaHzQ283.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门4座三厢车", "capacity": "3.0T" }, { "name": "奥迪A6L 2016款 30 FSI 技术型", "image": "http://car3.autoimg.cn/cardfs/product/g11/M04/3E/13/160x120_0_q87_autohomecar__wKgH4VaXeL-ALz-wAAgLQNMF66g971.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "2.5L" }, { "name": "奥迪A5 2016款 Coupe 45 TFSI 舒适型", "image": "http://car3.autoimg.cn/cardfs/product/g6/M13/67/8F/160x120_0_q87_autohomecar__wKgH3FXpHqGAFJgKAAMa8OUUmGI478.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "2门4座三厢车", "capacity": "2.0T" }, { "name": "奥迪A4L 2016款 35 TFSI 典藏版 自动标准型", "image": "http://car3.autoimg.cn/cardfs/product/g5/M13/13/56/160x120_0_q87_autohomecar__wKgHzFZynaeAIsFeAAaz03wZanY587.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "4门5座三厢车", "capacity": "2.0T" }, { "name": "奥迪Q5 2016款 40 TFSI 技术型", "image": "http://car3.autoimg.cn/cardfs/product/g4/M00/C7/4D/160x120_0_q87_autohomecar__wKjB01YzQLOAEwk5AAg-hXUe1kI849.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "5门5座SUV", "capacity": "2.0T" }, { "name": "奥迪Q3 2016款 30 TFSI 典藏版 智领型", "image": "http://car3.autoimg.cn/cardfs/product/g21/M15/24/60/160x120_0_q87_autohomecar__wKgFWlaokd2ASNZiAAY6qCb-1ds161.jpg", "price": { "0": {}, "context": {}, "length": 1 }, "style": "5门5座SUV", "capacity": "1.4T" }]
            }];

            var service = {

                /**
                 * 获取店铺列表
                 * @returns {店铺列表} 
                 */
                getShops: function () {
                    var defer = $q.defer();
                    defer.resolve(shops);
                    return defer.promise;
                },

                /**
                 * 获取店铺信息
                 * @param {int} shopId 店铺Id
                 * @returns {id:int, name: string, cars: array} 
                 */
                getShopInfo: function (shopId) {
                    var defer = $q.defer();
                    var matched = shops.filter(function (shop) {
                        if (shop.id === shopId) return shop;
                    });

                    if (matched.length) {
                        defer.resolve(matched[0]);
                    } else {
                        defer.reject("找不到店铺 " + shopId);
                    }
                    return defer.promise;
                },

                getCars: function (carId) {
                    var defer = $q.defer();
                    defer.resolve({
                        id: carId,
                        image: "http://car0.autoimg.cn/carnews/2014/12/3/160x120_0_q87_20141203161523056497111.jpg",
                        name: "奥迪Q5",
                        price: "30.34-44.80万",
                        cars: [{
                            id: 1,
                            name: "2016款 40 TFSI 进取型",
                            price: "38.34万",
                            capacity: "2.0T",
                            info:"手自一体"
                        },{
                            id: 2,
                            name: "2016款 40 TFSI 技术型",
                            price: "42.76万",
                            capacity: "2.0T",
                            info:"手自一体"
                        },{
                            id: 3,
                            name: "2016款 40 TFSI 舒适型",
                            price: "47.90万",
                            capacity: "2.0T",
                            info:"手自一体"
                        },{
                            id: 4,
                            name: "2016款 40 TFSI 动感型plus",
                            price: "50.90万",
                            capacity: "2.0T",
                            info:"手自一体"
                        },{
                            id: 5,
                            name: "2016款 40 TFSI 豪华型plus",
                            price: "53.40万",
                            capacity: "2.0T",
                            info:"手自一体"
                        }]
                    });

                    return defer.promise;
                }
            };
            return service;
        });
})();
/// <reference path="../_config.js" />
/// <reference path="../../vendor/angularjs/angular.js" />

/*
 * 当前用户信息服务
 * author: Alan
 * created: 2016-03-21 15:31
 * 
 */
(function () {
    angular.module(AutoHome.ngModules.services + ".User", [])
    .factory("UserSvc", function ($q, $http) {
        var service = {
            info: {
                type: AutoHome.user.type, //用户选择的类型: buyer(买车), owner(车主)
                appId: undefined,
                openId: undefined,
                id: undefined,
                headImgUrl: undefined,
                nickName: undefined
            },
            

            /**
             * 查询用户
             * @param {string} appId 微信公众号Id
             * @param {string} openId 微信用户Id
             * @returns {promise} 
             */
            getUser: function (appId, openId) {
                var promise = $http({
                    method: "GET",
                    url: "/Api/Mobile/QueryUser",
                    params: {
                        wechat: appId,
                        user: openId
                    }
                });
                return promise;
            },

            /**
             * 验证用户是否有效
             * @param {string} appId 微信公众号Id
             * @param {string} openId 用户Id
             * @returns {} 
             */
            isValid: function (appId, openId) {
                var promise = $http({
                    method: "GET",
                    url: "/Api/Mobile/IsValid",
                    params: {
                        wechat: appId,
                        user: openId
                    }
                });

                promise.then(function () {
                    console.info("用户有效");
                }, function () {
                    //location.href = "/Mobile/error.html?msg=" + encodeURI("用户无效");
                    console.error("用户无效");
                });
                return promise;
            }
        };
        return service;
    });
})();