import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  data: any;
  newAuthor: any;
  errors: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newAuthor = { name: ''};
  }

  create() {
    const obs = this._httpService.createAuthor(this.newAuthor);
    obs.subscribe(data => {
      console.log('Creating author', data);
      if (data['errors']) {
        this.errors = data['errors'];
      } else {
        this.goHome();
      }
    });
  }

  goHome() {
    this._router.navigate(['/home']);
  }
}
