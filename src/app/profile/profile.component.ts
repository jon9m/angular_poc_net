import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPathHome } from '../utils/utils';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  itemList: Object;
  itemKeys: string[];

  constructor(private appstore: Store<{ appState: { item: Item, items: Item[], title: string } }>) { }

  ngOnInit() {
    setPathHome(this.appstore);

    this.itemList = {
      'Address': [
        {
          path: 'residential',
          description: 'Residential'
        },
        {
          path: 'pobox',
          description: 'PO Box'
        }
      ],
      'Contact details': [
        {
          path: 'phone',
          description: 'Phone'
        },
        {
          path: 'email',
          description: 'Email'
        }
      ],
      'Contact preference': [
        {
          path: 'sms',
          description: 'SMS'
        },
        {
          path: 'cp/phone',
          description: 'phone'
        },
        {
          path: 'cp/email',
          description: 'Email'
        }
      ],
      'Digital wallet management': [
        {
          path: 'adddocument',
          description: 'Add document'
        },
        {
          path: 'removedocument',
          description: 'Remove document'
        },
        {
          path: 'removemobiledevice',
          description: 'Remove mobile device'
        }
      ],
      'Licenses': [
        {
          path: 'carlicence',
          description: 'Car'
        },
        {
          path: 'licence',
          description: 'Boat'
        },
        {
          path: 'licence',
          description: 'Helicopter'
        }
      ],
      'Registrations': [
        {
          path: 'carregistration',
          description: 'Car'
        },
        {
          path: 'registrations2',
          description: 'Boat'
        },
        {
          path: 'registrations3',
          description: 'Helicopter'
        }
      ],
      'Infringements': [
        {
          path: 'infringements',
          description: 'Speeding fine'
        },
        {
          path: 'infringements2',
          description: 'Speeding fine 2'
        },
        {
          path: 'infringements3',
          description: 'Speeding fine 3'
        }
      ],
      'Other products': [
        {
          path: 'otherproducts',
          description: 'Product x'
        },
        {
          path: 'otherproducts2',
          description: 'Product B'
        },
        {
          path: 'otherproducts3',
          description: 'Product P'
        }
      ]
    };

    this.itemKeys = Object.keys(this.itemList);
  }

}
