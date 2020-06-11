import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todos = [];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.featchTodo();
  }
  finishTodo(todo){
    if(todo.status != 'finished'){
      this.todos.forEach((t)=>{
        if(t.id == todo.id){
          t.status = 'finished';
        }
      });
    }
    else{
      this.todos.forEach((t)=>{
        if(t.id == todo.id){
          t.status = 'Yet to start';
        }
      });
    }
    
  }
  deleteTodo(todo){
    this.todos = this.todos.filter(t=> t.id != todo.id);
  }
}
