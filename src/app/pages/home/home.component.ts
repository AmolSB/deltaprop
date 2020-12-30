import {Component, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  signUp = true;
  login = false;

  constructor(private _router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  showPublicCollections() {
    this._router.navigate(['/list'], {queryParams: {publicCollections: true}})
  }

}
