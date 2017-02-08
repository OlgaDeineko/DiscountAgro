import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductTypeList } from './product-type/product-type';
import {ProductList} from './product-list/product-list';
import { AgroService } from './shared/agro.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ProductTypeList,
        ProductList
    ],
    providers: [ AgroService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }