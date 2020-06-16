import { Component, OnInit, Input, EventEmitter , Output } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()todo;
  
  constructor(private todoService : TodoService) { }

  ngOnInit(): void {  }

  setClass(){
    return {
      'finish':true,
      'finished': this.todo.status == 'Finished'
    };
  }

  updateStatus(status){
    if(this.todo.status == status && status == 'Finished'){
      status = 'Yet to start';
    }
    this.todo.status = status;
    this.todoService.updateTodo(this.todo)
  }

  onDelete(){
    this.todoService.deleteTodo(this.todo);
  }

}
