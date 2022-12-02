import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
        let params = new HttpParams().append("title", title).append("author", author).append("content", content);
        return this.http.post(environment.url + '/testimonies/new/', params);
    }
}
