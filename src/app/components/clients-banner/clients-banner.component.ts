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
import { logoTranslationAnimation } from 'src/app/animations';

@Component({
  selector: 'app-clients-banner',
  templateUrl: './clients-banner.component.html',
  styleUrls: ['./clients-banner.component.css'],
  animations: [logoTranslationAnimation],
})
export class ClientsBannerComponent implements OnInit {
  clients = [
    { name: 'Client 1', imgSrc: 'assets/clients/campbells.png' },
    { name: 'Client 2', imgSrc: 'assets/clients/starbucks.png' },
    { name: 'Client 3', imgSrc: 'assets/clients/discovery.png' },
    { name: 'Client 4', imgSrc: 'assets/clients/microsoft.png' },
    { name: 'Client 4', imgSrc: 'assets/clients/uber.png' },
    { name: 'Client 4', imgSrc: 'assets/clients/vh1.png' },
    { name: 'Client 4', imgSrc: 'assets/clients/viacom.png' },
    // more clients
  ];

  currentIndex = 0;
  clientWidth = 200; // adjust this value to change the width of the client item
  clientHeight = 75; // adjust this value to change the width of the client item
  clientCount = this.clients.length;
  currentImageIndex: number[] = [];
  nClientsToShow: number = 0;
  currentAnimationStateIndex: number = 0;
  navigating: boolean = false;
  arrowSectionWidth: number = 100;
  nFinished = 0;

  ngOnInit(): void {
    const nToShow = Math.floor(
      (window.innerWidth - 2 * this.arrowSectionWidth) / this.clientWidth
    );

    this.clientWidth = Math.min(
      window.innerWidth - 2 * this.arrowSectionWidth,
      200
    );
    this.clientHeight = this.clientWidth / 2.667;

    console.log(this.clientWidth);

    for (let i = 0; i < this.clients.length; i++) {
      this.currentImageIndex[i] = i;
    }
  }

  get voidTranslationLength() {
    return -this.arrowSectionWidth - this.clientWidth + 'px';
  }

  get leftTranslationLength() {
    return -this.arrowSectionWidth - 2 * this.clientWidth + 'px';
  }

  isVisible(index: number) {
    return true;
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
