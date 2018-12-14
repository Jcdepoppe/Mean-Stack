import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('api/authors');
  }

  getAuthor(id: number) {
    return this._http.get(`api/authors/${id}`);
  }

  createAuthor(newAuthor) {
    return this._http.post('api/authors', newAuthor);
  }

  deleteAuthor(id: number) {
    return this._http.delete(`api/authors/${id}`);
  }

  updateAuthor(id: number, data) {
    return this._http.put(`api/authors/${id}`, data);
  }

  createQuote(aid: number, data) {
    return this._http.patch(`api/authors/${aid}/quotes`, data);
  }

  deleteQuote(aid: number, qid: number, data) {
    return this._http.patch(`api/authors/${aid}/quotes/${qid}/delete`, data);
  }

  vote(aid: number, qid: number, data) {
    return this._http.patch(`api/authors/${aid}/quotes/${qid}/vote`, data);
  }
}
