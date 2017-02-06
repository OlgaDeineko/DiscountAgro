import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ProductTypes } from './productTypes';


@Injectable()
export class AgroService {

    constructor(private http: Http) {}

    getProductTypes():Promise<ProductTypes[]> {
        return this.http.get('https://agrobackend.herokuapp.com/types')
            .toPromise()
            .then(response => response.json());

    }

    // private handleError(error:any):Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
}