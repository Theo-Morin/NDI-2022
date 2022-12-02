import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class FaqService {

    constructor(
        private http: HttpClient
    ) { }

    getCategories(): Observable<any> {
        return this.http.get(env.url + '/faq/');
    }
    get(catNum: int): Observable<any> {
        return this.http.get(env.url + '/faq/' + catNum + '/');
    }
}
