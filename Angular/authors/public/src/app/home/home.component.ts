import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.readAuthors();
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
    });
  }

  readAuthors() {
    const obs = this._httpService.getAuthors();
    obs.subscribe(data => {
      console.log('Retrieving authors', data);
      this.authors = data;
    });
  }

  delete(id: number) {
    const obs = this._httpService.deleteAuthor(id);
    obs.subscribe(data => {
      console.log('Destroying', data);
      this.readAuthors();
    });
  }

}
