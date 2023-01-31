import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOGO_PATH } from 'src/app/constants';
import { NavItem } from './navItems';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  logoPath: string = LOGO_PATH;
  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navItems: NavItem[] = [
    { label: 'Home', route: '' },
    { label: 'Solutions', route: '' },
    { label: 'Portfolio', route: '' },
    { label: 'Academy', route: '' },
    { label: 'Contact Us', route: '' },
  ];

  isActive(link: string) {
    return this.router.url === link;
  }
}
