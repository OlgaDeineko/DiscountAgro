import { Component,OnInit  } from '@angular/core';
import {Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }               from '@angular/common';

import { Product } from '../shared/product';
import { AgroService } from '../shared/agro.service';


@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: './product-list.html',
    styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit{
    products: Product[];
    product: Product;
    selectedProduct: Product;

    constructor(
        private agroService: AgroService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) {}
    getProduct(id): void {
        this.agroService.getProductByTypeId(id).then(products => this.products = products);
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getProduct(id);
            console.log(id);
        });
    }
    goBack(): void {
        let link = ['/product-type'];
        this.router.navigate(link);
    }
}
