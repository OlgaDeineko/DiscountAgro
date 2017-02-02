import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductTypeList } from './product-type/product-type';
import { AgroService } from './shared/agro.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports:[
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ProductTypeList
    ],
    providers: [ AgroService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }