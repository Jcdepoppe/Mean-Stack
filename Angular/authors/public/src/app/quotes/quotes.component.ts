import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  author: any;
  quotes: any;
  id: any; // ID of the author
  voting = {};
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.voting = {};
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
    });
    this.readAuthor(this.id);
  }

  readAuthor(id: number) {
    const obs = this._httpService.getAuthor(id);
    obs.subscribe(data => {
      console.log('Gettin them quotes...', data);
      this.author = data['data'];
      this.quotes = data['data'].quotes;
      for (let i = 0; i < this.quotes.length; i++) {
        this.voting[this.quotes[i]._id] = {content: this.quotes[i].content, votes: this.quotes[i].votes};
      }
    });
  }

  vote(id: number, value: number) {
    this.voting[id].votes += value;
    const obs = this._httpService.vote(this.id, id, this.voting[id]);
    obs.subscribe(data => {
      console.log('Updating votes....', data);
    });
  }

  delete(id: number) {
    const obs = this._httpService.deleteQuote(this.id, id, this.voting[id]);
    obs.subscribe(data => {
      console.log('Destroying awful quote', data);
      this.readAuthor(this.id);
    });
  }

}
