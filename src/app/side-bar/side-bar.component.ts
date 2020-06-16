import { Component, OnInit, Input } from '@angular/core';
import {  Router , NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'] 
})

export class SideBarComponent implements OnInit {
  @Input()isMobileActive:boolean = false;
  navEnd : Observable<NavigationEnd>;
  
  constructor(private router : Router) {
    // get the navigationend event form all router events
    this.navEnd = this.router.events.pipe(
      filter( e => e instanceof  NavigationEnd ) 
    )as Observable<NavigationEnd>;

  }

  ngOnInit(): void { 
    this.navEnd.subscribe( event =>{
      document.querySelectorAll('.link').forEach( l => l.classList.remove('active') );
      if(event.url === "/"){
        document.querySelector('#home').classList.add('active');
      }
      else if(event.url === "/todo"){
        document.querySelector('#todo').classList.add('active');
      }
    } );
  }

  setClass(){
    
    return {
      'side-bar' : true,
      'mobile-active' : this.isMobileActive
    };
  }

  updateActive():void{
    this.isMobileActive = false;
  }

}
