import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { goBack } from 'src/app/utils/utils';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-carlicense',
  templateUrl: './carlicense.component.html',
  styleUrls: ['./carlicense.component.css']
})
export class CarlicenseComponent implements OnInit {
  constructor(private router: Router, private appstore: Store<{ appState: { item: Item, items: Item[], title: string } }>) { }

  title = '';
  items = [];

  ngOnInit() {
    this.appstore.select('appState').subscribe((val) => {
      this.title = val.title;
      this.items = val.items;
    }, err => {
      console.log(err);
    });
  }

  onCancel() {
    goBack(this.appstore, this.router);
  }

}
