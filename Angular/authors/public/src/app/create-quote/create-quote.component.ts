import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  id: any;
  newQuote: any;
  errors: any;
  author: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newQuote = {content: ''};
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
    });
    this.readAuthor(this.id);
  }

  create() {
  const obs = this._httpService.createQuote(this.id, this.newQuote);
    obs.subscribe(data => {
      console.log('Creating quote', data);
      if (!(data['error'])) {
        this.goToQuotes();
      }
    });
  }

  readAuthor(id: number) {
    const obs = this._httpService.getAuthor(id);
    obs.subscribe(data => {
      console.log('Getting author..', data);
      this.author = data['data'];
    });
  }

  goToQuotes() {
    this._router.navigate(['/quotes', this.author._id]);
  }

}
