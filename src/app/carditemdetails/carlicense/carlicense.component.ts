import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Item } from '../../model/item.model';
import { goBack } from '../../utils/utils';

@Component({
  selector: 'app-carlicense',
  templateUrl: './carlicense.component.html',
  styleUrls: ['./carlicense.component.css']
})
export class CarlicenseComponent implements OnInit {
  constructor(private router: Router, private appstore: Store<{ appState: { item: Item, items: Item[], title: string } }>) { }

  title = '';
  items = [];
  licenseImgPath;

  ngOnInit() {
    this.appstore.select('appState').subscribe((val) => {
      this.licenseImgPath = './assets/licence.png';
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
