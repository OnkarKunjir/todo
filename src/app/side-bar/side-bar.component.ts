import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router:Router) {
    // this.router.events.subscribe((url:any) => console.log(url));
   }

  ngOnInit(): void {
  }

  updateActive(link){
    document.querySelectorAll('.link').forEach( l => l.classList.remove('active') );
    link.currentTarget.classList.add('active');
  }

}
