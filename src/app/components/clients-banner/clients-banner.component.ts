import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { mod } from 'src/app/utils';

@Component({
  selector: 'app-clients-banner',
  templateUrl: './clients-banner.component.html',
  styleUrls: ['./clients-banner.component.css'],
  animations: [
    trigger('translation', [
      state(
        'void',
        style({
          transform: 'translate(-300px)',
        })
      ),
      state(
        'translateRight',
        style({
          transform: 'translate(0px)',
        })
      ),
      state(
        'translateLeft',
        style({
          transform: 'translate(-600px)',
        })
      ),
      transition('void => translateRight', [animate('0.5s')]),
      transition('void => translateLeft', [animate('0.5s')]),
      transition('translateRight => void', [animate('0s')]),
      transition('translateLeft => void', [animate('0s')]),
    ]),
  ],
})
export class ClientsBannerComponent implements OnInit {
  clients = [
    { name: 'Client 1', imgSrc: '../../../assets/clients/campbells.png' },
    { name: 'Client 3', imgSrc: '../../../assets/clients/discovery.png' },
    { name: 'Client 4', imgSrc: '../../../assets/clients/microsoft.png' },
    { name: 'Client 2', imgSrc: '../../../assets/clients/starbucks.png' },
    { name: 'Client 3', imgSrc: '../../../assets/clients/uber.png' },
        { name: 'Client 1', imgSrc: '../../../assets/clients/campbells.png' },
    { name: 'Client 3', imgSrc: '../../../assets/clients/discovery.png' },
    { name: 'Client 4', imgSrc: '../../../assets/clients/microsoft.png' },
    { name: 'Client 2', imgSrc: '../../../assets/clients/starbucks.png' },
    { name: 'Client 3', imgSrc: '../../../assets/clients/uber.png' },
    // more clients
  ];

  currentIndex = 0;
  clientWidth = 200; // adjust this value to change the width of the client item
  clientHeight = 75; // adjust this value to change the width of the client item
  clientVisible = 3; // adjust this value to change the number of visible clients
  clientCount = this.clients.length;
  nLogoToShow = 0;
  currentImageIndex: number[] = [];

  currentAnimationStateIndex: number = 0;
  navigating: boolean = false;

  nFinished = 0;

  ngOnInit(): void {
    const width = window.innerWidth - 200;
    console.log(width);
    this.nLogoToShow = Math.min(Math.floor(width / 200), this.clients.length);
    console.log(width, this.nLogoToShow);
    //this.nLogoToShow = 5;

    console.log(this.nLogoToShow);

    for (let i = 0; i < this.clients.length; i++) {
      this.currentImageIndex[i] = i;
    }
  }

  isVisible(index: number) {
    return true;
    return index >= 0 && index <= this.nLogoToShow;
  }

  counter = 0;
  initiateTranslation(isLeft: boolean) {
    this.currentAnimationStateIndex = isLeft ? 2 : 1;
    setTimeout(() => {
      this.currentAnimationStateIndex = 0;
      this.navigate(isLeft);
    }, 500);

    /*if(++this.counter == 2){
      this.currentAnimationStateIndex =2;
    }*/
    console.log('initiate!');
  }

  navigate(isLeft: boolean) {
    for (let i = 0; i < this.currentImageIndex.length; i++) {
      this.currentImageIndex[i] += isLeft ? 1 : -1;
      this.currentImageIndex[i] = mod(
        this.currentImageIndex[i],
        this.clients.length
      );
    }
  }

  isFirst = true;

  onTranslationComplete(event: AnimationEvent) {}
}
