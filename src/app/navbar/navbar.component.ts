import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import {  Router , NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {
  isOpen : boolean = false;
  navEnd : Observable<NavigationEnd>;
  @Output() toggleMobile : EventEmitter<null> = new EventEmitter();  
  
  constructor(private todoService : TodoService , private router : Router) { 
    this.navEnd = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit(): void {
    this.navEnd.subscribe( event => {
      if(event.url == '/todo'){
        document.querySelectorAll('.todo-related').forEach(elem => {
          elem.classList.remove('hidden');
        });
      }
      else{
        document.querySelectorAll('.todo-related').forEach(elem => {
          elem.classList.add('hidden');
        });
      }
    });
  }

  toggle(){
    this.toggleMobile.emit();
  }

  search(query) : void{
    this.todoService.search(query.target.value);
  }

}
