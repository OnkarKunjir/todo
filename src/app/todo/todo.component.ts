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
    
  updateTodo(todo): void{
    this.todos = this.todoService.updateTodo(todo);
  }

  deleteTodo(todo): void{
    this.todos = this.todoService.deleteTodo(todo);
  }
}
