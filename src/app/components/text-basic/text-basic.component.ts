import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-basic',
  templateUrl: './text-basic.component.html',
  styleUrls: ['./text-basic.component.css']
})
export class TextBasicComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
