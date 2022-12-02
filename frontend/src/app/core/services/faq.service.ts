import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})

export class FaqService {

    constructor(
        private http: HttpClient,
    ) { }

    getCategories(): Observable<any> {
        return this.http.get(environment.url + '/faq/');
    }
    get(catNum: number): Observable<any> {
        return this.http.get(environment.url + '/faq/' + catNum + '/');
    }
}
