import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/model/item.model';
import { Router } from '@angular/router';
import { DESELECT_CARD } from 'src/app/app.actions';
import { goBack } from 'src/app/utils/utils';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.css']
})
export class ResidentialComponent implements OnInit {
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
