import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class TestimonyService {

    constructor(
        private http: HttpClient
    ) { }

    get(): Observable<any> {
        return this.http.get(env.url + '/testimonies/');
    }

    create(title: string, author: string, content: string): Observable<any> {
        return this.http.post(env.url + '/testimonies/new/', { title, author, content });
    }
}
