import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }               from '@angular/common';

import { AgroService } from '../shared/agro.service';


@Component({
    selector: 'contact-form',
    templateUrl: './app/contact-form/contact-form.html',
    styleUrls: ['./app/contact-form/contact-form.css']
})
export class ContactFormComponent {
    // constructor(private agroService:AgroService,
    //             private route:ActivatedRoute) {
    // }
    //
    //
    // sendMessage() {
    //     this.departmentService.sendMessage(this.model);
    // }
    //
    // ngOnInit():void {
    //     this.sendMessage();
    // }
}
