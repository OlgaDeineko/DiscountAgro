import { Component,OnInit  } from '@angular/core';
import {Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }               from '@angular/common';

import { Product } from '../shared/product';
import { AgroService } from '../shared/agro.service';


@Component({
    moduleId: module.id,
    selector: 'product-detail',
    templateUrl: './product-detail.html',
    styleUrls: ['./product-detail.css']
})
export class ProductDetail implements OnInit{
    products: Product[];
    product: Product;

    constructor(
        private agroService: AgroService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location

    ) {}
    getOneProduct(id): void {
        this.agroService.getProductById(id).then(products => this.products = products);
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getOneProduct(id);
            console.log(id);
        });
    }
    goBackToList(): void {
        this.location.back();
    }

}
