import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css'],
})
export class ProfilePhotoComponent implements OnInit {
  @Input()
  sizePx: number = 300;

  constructor() {}

  ngOnInit(): void {
   
  }

  get style() {
    return {
      width: this.sizePx + 'px',
      height: this.sizePx + 'px',
      'background-size': this.sizePx + 'px ' + this.sizePx + 'px',
    };
  }
}
