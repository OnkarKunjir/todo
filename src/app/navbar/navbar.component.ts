import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    trigger('openClose',[
      state('open' , style({
        transform: 'translate(0% , 0%)',
        boxShadow: '-6px 20px 6px 6px var(--bg-mid)'

      })),
      state('closed' , style({
        transform: 'translate(100% , 0%)'
      })),

      transition('closed => open', [
        animate('0.3s')
      ]),
      transition('open => closed', [
        animate('0.3s')
      ]),

    ])
  ]
})
export class NavbarComponent implements OnInit {
  isOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
