import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { AgroService } from '../shared/agro.service';


@Component({
    selector: 'contact-form',
    templateUrl: './app/contact-form/contact-form.html',
    styleUrls: ['./app/contact-form/contact-form.css']
})
export class ContactFormComponent {
    form: any = {};
    files: any;
    constructor(public http:Http) {
        this.form = {
            name: {}
        };
    }
    addFile(event) {
        let target = event.target || event.srcElement;
        this.files = target.files;
    }
    submit_register() {
        let final_data;
        if (this.files) {
            let files: FileList = this.files;
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('file', files[i]);
            }
            formData.append('data', JSON.stringify(this.form));

            final_data = formData;
        } else {
            //Если нет файла, то слать как обычный JSON
            final_data = this.form;
        }

        this.http.post('https://agrobackend.herokuapp.com/message', JSON.stringify(final_data))
            .map((response: Response) => response.json())
            .subscribe(resp => {
            alert('ok');
            })

    }
}
