import { Component, Input, OnInit } from '@angular/core';
import { IconGridItem } from './icon-grid-item';

@Component({
  selector: 'app-icons-grid',
  templateUrl: './icons-grid.component.html',
  styleUrls: ['./icons-grid.component.css'],
})
export class IconsGridComponent implements OnInit {
  constructor() {}

  @Input()
  items: IconGridItem[] = [];

  ngOnInit(): void {}
}
