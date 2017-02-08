import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductTypeList } from './product-type/product-type';
import {ProductList} from './product-list/product-list';

const routes: Routes = [
    { path: '', redirectTo: '/product-type', pathMatch: 'full' },
    { path: 'product-type',  component: ProductTypeList },
    { path: 'product-type/:id',  component: ProductList}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}