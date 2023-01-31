import { Component, OnInit } from '@angular/core';
import { IconGridItem } from '../icons-grid/icon-grid-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  iconGridItems: IconGridItem[] = [
    {
      title: 'Oporteat maluisset eos',
      content:
        'Ex denique similique eam \
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam.',
      iconName: 'payments',
    },
    {
      title: 'Dico intellegam ad per, consectetur 2',
      content:
        'Choro dicam ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam.',
      iconName: 'trending_up',
    },
    {
      title: 'Malis periculis vix ad',
      content:
        'Incididunt iudico legere dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam.',
      iconName: 'donut_large',
    },
    {
      title: 'Legere definitiones augue mnesarchum',
      content:
        'Nam in regione adipisci, consectetur adipiscing elit, sed do eiusmod \
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam.',
      iconName: 'gavel',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
