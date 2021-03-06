import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor(private appstore: Store<{ appState: { item: Item, items: Item[], title: string } }>) { }

  currTitle;

  ngOnInit() {
    this.appstore.select('appState').subscribe((val) => {
      this.currTitle = val.title;
    }, err => {
      console.log(err);
    });
  }

}
