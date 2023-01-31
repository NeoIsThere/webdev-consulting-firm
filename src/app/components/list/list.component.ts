import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from './list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input()
  title: String = 'Principaux symptômes:';

  @Input()
  items: ListItem[] = [
    { label: 'Rougeur', icon: 'remove' },
    { label: 'Douleur', icon: 'remove' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
