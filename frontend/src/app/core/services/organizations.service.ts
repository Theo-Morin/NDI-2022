import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})

export class OrganizationService {

    constructor(
        private http: HttpClient
    ) { }

    get(): Observable<any> {
        return this.http.get(environment.url + '/organizations/');
    }
}
