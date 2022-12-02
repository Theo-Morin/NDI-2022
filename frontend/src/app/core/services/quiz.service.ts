import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})

export class QuizService {

    constructor(
        private http: HttpClient
    ) { }

    getList(): Observable<any> {
        return this.http.get(environment.url + '/quiz/');
    }
    get(name: string): Observable<any> {
        return this.http.get(environment.url + '/quiz/' + encodeURIComponent(name) + '/');
    }
}
