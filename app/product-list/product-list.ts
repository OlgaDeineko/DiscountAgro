import { Component,OnInit  } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }               from '@angular/common';

import { Product } from '../shared/product';
import { AgroService } from '../shared/agro.service';


@Component({
    selector: 'product-list',
    templateUrl: './app/product-list/product-list.html',
    styleUrls: ['./app/product-list/product-list.css']
})
export class ProductList implements OnInit{


     ngOnInit(): void {


    }


}
