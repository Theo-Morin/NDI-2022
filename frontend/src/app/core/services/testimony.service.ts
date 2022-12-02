import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})

export class TestimonyService {

    constructor(
        private http: HttpClient
    ) { }

    get(): Observable<any> {
        return this.http.get(environment.url + '/testimonies/');
    }

    create(title: string, author: string, content: string): Observable<any> {
        return this.http.post(environment.url + '/testimonies/new/', { title, author, content });
    }
}
