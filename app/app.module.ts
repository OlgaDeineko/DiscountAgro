import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ContactFormComponent } from './contact-form/contact-form';
import { ProductTypeList } from './product-type/product-type';
import {ProductList} from './product-list/product-list';
import {ProductDetail} from './product-detail/product-detail';
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
        ContactFormComponent,
        ProductTypeList,
        ProductList,
        ProductDetail
    ],
    providers: [ AgroService ],
    bootstrap:    [ AppComponent,ContactFormComponent ]
})
export class AppModule { }