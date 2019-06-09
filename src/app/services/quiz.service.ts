import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class QuizService {  // quiz service to get quiz data from database 

  constructor(private http: HttpClient) { }

  get(url: string) {
    console.log('url',url);
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: '/data/cricket.json', name: 'CRICKET TRIVIA' },
    ];
  }

}
