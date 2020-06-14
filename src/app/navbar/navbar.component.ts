import { Component, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {
  isOpen:boolean = false;
  @Output() toggleMobile : EventEmitter<null> = new EventEmitter();  
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleMobile.emit();
  }

}
