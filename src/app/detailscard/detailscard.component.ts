import { Component, Input, OnChanges } from '@angular/core';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-detailscard',
  templateUrl: './detailscard.component.html',
  styleUrls: ['./detailscard.component.css']
})
export class DetailscardComponent implements OnChanges {

  @Input() title: string;
  @Input() items: Item[];

  constructor() { }

  ngOnChanges() {
    // console.log(this.items);
  }

}
