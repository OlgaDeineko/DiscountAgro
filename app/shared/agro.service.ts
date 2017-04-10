import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

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
    getProductById(id:number):Promise<Product[]> {
        return this.http.get('https://agrobackend.herokuapp.com/products/'+ id)
            .toPromise()
            .then(response => response.json());
    }

    // sendMessage():Promise<Product[]> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this.http.post('https://agrobackend.herokuapp.com/message')
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
    }
    // private handleError(error:any):Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
}