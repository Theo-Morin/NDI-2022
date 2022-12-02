import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class QuizService {

    constructor(
        private http: HttpClient
    ) { }

    getList(): Observable<any> {
        return this.http.get(env.url + '/quiz/');
    }
    get(name: string): Observable<any> {
        return this.http.get(env.url + '/quiz/' + encodeURIComponent(name) + '/');
    }
}
