import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductTypes } from '../shared/productTypes';
import { AgroService } from '../shared/agro.service';

@Component({
    selector: 'product-types',
    templateUrl: './app/product-type/product-type.html',
    styleUrls: ['./app/product-type/product-type.css']
})
export class ProductTypeList implements OnInit {

    ngOnInit(): void {

    }



}
