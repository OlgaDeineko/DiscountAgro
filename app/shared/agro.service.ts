import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ProductType } from './productTypes';
import {Product} from './product';


@Injectable()
export class AgroService {
    product:Product;
    constructor(private http: Http) {}

    getProductTypes():Promise<ProductType[]> {
        return this.http.get('https://agrobackend.herokuapp.com/types')
            .toPromise()
            .then(response => response.json());

    }
    getProducts():Promise<Product[]> {
        return this.http.get('https://agrobackend.herokuapp.com/products')
            .toPromise()
            .then(res=>res.json());
    }

    getProductByTypeId(typeId:number):Promise<Product[]> {
        return this.http.get('https://agrobackend.herokuapp.com/products/type/'+ typeId)
            .toPromise()
            .then(response => response.json());
    }
    // private handleError(error:any):Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
}