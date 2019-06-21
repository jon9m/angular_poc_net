import { Component, Input, OnChanges } from '@angular/core';
import { Item } from '../model/item.model';
import { Store } from '@ngrx/store';
import { SELECT_CARD } from '../app.actions';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditems.component.html',
  styleUrls: ['./carditems.component.css']
})
export class CardItemsComponent implements OnChanges {

  @Input() title: string;
  @Input() items: Item[];

  constructor(private appstore: Store<{ appState: { items: Item[], title: string } }>) { }

  ngOnChanges() {
    // console.log(this.items);
  }

  clickItem(item: Item, items: Item[], title: string) {
    this.appstore.dispatch({
      type: SELECT_CARD,
      payload: {
        item: item,
        items: items,
        title: title
      }
    });
  }

}
