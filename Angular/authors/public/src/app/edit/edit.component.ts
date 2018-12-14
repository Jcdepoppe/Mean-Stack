import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  updateAuthor: any;
  errors: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
    });
    this.retrieveAuthor();
  }

  edit() {
    const obs = this._httpService.updateAuthor(this.id, this.updateAuthor);
    obs.subscribe(data => {
      console.log('Updating....', data);
      if (data['error']) {
        this.errors = data;
      } else {
        this.goHome();
      }
    });
  }

  retrieveAuthor() {
    const obs = this._httpService.getAuthor(this.id);
    obs.subscribe(data => {
      console.log('Your Author sir...', data);
      this.updateAuthor = { name: data['data'].name};
    });
  }

  goHome() {
    this._router.navigate(['/home']);
  }
}
