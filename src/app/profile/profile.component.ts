import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  itemList: Object;
  itemKeys: string[];

  constructor() { }

  ngOnInit() {
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
          path: 'licence',
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
          path: 'registrations',
          description: 'Car'
        },
        {
          path: 'registrations',
          description: 'Boat'
        },
        {
          path: 'registrations',
          description: 'Helicopter'
        }
      ],
      'Infringements': [
        {
          path: 'infringements',
          description: 'Speeding fine'
        },
        {
          path: 'infringements',
          description: 'Speeding fine 2'
        },
        {
          path: 'infringements',
          description: 'Speeding fine 3'
        }
      ],
      'Other products': [
        {
          path: 'otherproducts',
          description: 'Product x'
        },
        {
          path: 'otherproducts',
          description: 'Product B'
        },
        {
          path: 'otherproducts',
          description: 'Product P'
        }
      ]
    };

    this.itemKeys = Object.keys(this.itemList);
  }

}
