import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'https://node-hnapi.herokuapp.com';

@Injectable()
export class HackerNewsService {

  constructor(private http: Http) { }

  getLatestStories(page: number = 1) {
    return this.http.get(`${BASE_URL}/news?page=${page}`);
  }
}
