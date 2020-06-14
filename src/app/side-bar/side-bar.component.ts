import { Component, OnInit, Input } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'] 
})

export class SideBarComponent implements OnInit {
  @Input()isMobileActive:boolean = false;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void { 
   }

  setClass(){
    
    return {
      'side-bar' : true,
      'mobile-active' : this.isMobileActive
    };
  }
  updateActive(link){
    document.querySelectorAll('.link').forEach( l => l.classList.remove('active') );
    link.currentTarget.classList.add('active');
    this.isMobileActive = false;
  }

}
