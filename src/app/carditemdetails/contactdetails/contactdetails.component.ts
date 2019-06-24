import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Item } from '../../model/item.model';
import { goBack } from '../../utils/utils';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {

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
