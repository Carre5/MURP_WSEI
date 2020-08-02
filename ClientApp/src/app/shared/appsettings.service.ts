import { Injectable } from '@angular/core';
import { AppSettings } from "./appsettings";

@Injectable()
export class AppSettingsService {
    constructor() {
    }

    baseURL: string = 'http://localhost:4200/';
    apiURL: string = 'http://localhost:5000/api/';

    //Angular Udemy
    logStatusChange(status: string) {
        console.log('Status of server: ' + status);
    }
}
