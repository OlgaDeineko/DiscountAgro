import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductType } from '../shared/productTypes';
import { AgroService } from '../shared/agro.service';

@Component({
    selector: 'product-types',
    templateUrl: './app/product-type/product-type.html',
    styleUrls: ['./app/product-type/product-type.css']
})
export class ProductTypeList implements OnInit {
    productTypes: ProductType[];
    selectedProductType: ProductType;

    constructor(
        private agroService: AgroService,
        private router: Router) {
    }

    getProductTypes(): void {
        this.agroService.getProductTypes().then(productTypes => this.productTypes = productTypes);
    }
    ngOnInit(): void {
        this.getProductTypes();
    }

    onSelect(productType: ProductType): void {
        this.selectedProductType = productType;
    }

    gotoDetail(productType: ProductType): void {
        let link = ['/product-list/'+ productType.id];
        console.log("LINK"+link.toString());
        this.router.navigate(link);
    }

}
