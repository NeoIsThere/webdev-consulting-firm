import { Component, OnInit } from '@angular/core';
import { ADDRESS, EMAIL, PHONE } from 'src/app/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  address = ADDRESS;
  phone = PHONE;
  email = EMAIL;


  constructor() {}

  ngOnInit(): void {
   
  }
}
