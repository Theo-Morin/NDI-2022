import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})

export class ArticleService {

    constructor(
        private http: HttpClient
    ) { }

    get(): Observable<any> {
        return this.http.get(environment.url + '/articles/');
    }
    getTop(): Observable<any> {
        return this.http.get(environment.url + '/articles/top/');
    }

    create(title: string, author: string, content: string, isPinned: boolean|undefined): Observable<any> {
        return this.http.post(environment.url + '/articles/new/', { title, author, content, isPinned: isPinned ? 1 : 0 });
    }
}
