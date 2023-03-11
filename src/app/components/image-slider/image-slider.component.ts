import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  constructor() {}

  imageIndex: number = 0;
  imagesSrc: string[] = ['assets/0.jpg', 'assets/1.jpg'];

  ngOnInit(): void {}

  onChangeImage(isIncrement: boolean) {
    this.imageIndex += isIncrement ? 1 : -1;
    if (this.imageIndex == this.imagesSrc.length) {
      this.imageIndex = 0;
    }
    if (this.imageIndex < 0) {
      this.imageIndex = this.imagesSrc.length - 1;
    }
  }

  getDisplay(index: number): { [klass: string]: any } {
    const displayStatus = this.imageIndex == index ? 'block' : 'none';

    return {
      display: displayStatus,
    };
  }

  getStyle(index: number): { [klass: string]: any } {
    const displayStatus = this.imageIndex == index ? 'flex' : 'none';

    return {
      'background-image': `url("${this.imagesSrc[index]}") `,
      display: displayStatus,
    };
  }

  get isSliderActive() {
    return this.imagesSrc.length > 1;
  }
}
