import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todos = [];
  constructor( private todoService:TodoService ) { 
    this.todoService.todoChange.subscribe( t => {
      this.todos = t;
    });
  }

  ngOnInit(): void {
    this.todoService.featchTodo();
  }

  addTodo():void{
    this.todoService.addTodo();
  }
    
}
