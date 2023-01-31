import { Component, OnInit } from '@angular/core';
import { ADDRESS } from 'src/app/constants';

@Component({
  selector: 'app-acces-map',
  templateUrl: './acces-map.component.html',
  styleUrls: ['./acces-map.component.css']
})
export class AccesMapComponent implements OnInit {

  address: string = ADDRESS;

  constructor() { }

  ngOnInit(): void {
  }

  copyLinkToClipboard() {
    navigator.clipboard
      .writeText(this.address)
      .then()
      .catch((err) => {});
  }
}
