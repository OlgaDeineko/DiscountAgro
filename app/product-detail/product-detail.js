"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var agro_service_1 = require('../shared/agro.service');
var ProductDetail = (function () {
    function ProductDetail(agroService, route, router, location) {
        this.agroService = agroService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    ProductDetail.prototype.getOneProduct = function (id) {
        var _this = this;
        this.agroService.getProductById(id).then(function (products) { return _this.products = products; });
    };
    ProductDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.getOneProduct(id);
            console.log(id);
        });
    };
    ProductDetail.prototype.goBackToList = function () {
        this.location.back();
    };
    ProductDetail = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-detail',
            templateUrl: './product-detail.html',
            styleUrls: ['./product-detail.css']
        }), 
        __metadata('design:paramtypes', [agro_service_1.AgroService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], ProductDetail);
    return ProductDetail;
}());
exports.ProductDetail = ProductDetail;
//# sourceMappingURL=product-detail.js.map