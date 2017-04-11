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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ContactFormComponent = (function () {
    function ContactFormComponent(http) {
        this.http = http;
        this.form = {};
        this.form = {};
    }
    ContactFormComponent.prototype.addFile = function (event) {
        var target = event.target || event.srcElement;
        this.files = target.files;
    };
    ContactFormComponent.prototype.submit_register = function () {
        var final_data;
        if (this.files) {
            var files = this.files;
            var formData = new FormData();
            for (var i = 0; i < files.length; i++) {
                formData.append('file', files[i]);
            }
            formData.append('data', JSON.stringify(this.form));
            final_data = formData;
        }
        else {
            //Если нет файла, то слать как обычный JSON
            final_data = this.form;
        }
        this.http.post('https://agrobackend.herokuapp.com/message', JSON.stringify(final_data))
            .map(function (response) { return response; })
            .subscribe(function (resp) {
            alert('ok');
        });
    };
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'contact-form',
            templateUrl: './app/contact-form/contact-form.html',
            styleUrls: ['./app/contact-form/contact-form.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.js.map