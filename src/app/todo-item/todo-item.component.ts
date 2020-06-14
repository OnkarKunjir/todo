import { Component, OnInit, Input, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()todo;
  @Output() deleteTodo : EventEmitter<any> = new EventEmitter();  
  @Output() updateTodo : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  setClass(){
    return {
      'finish':true,
      'finished':this.todo.status == 'Finished'
    };
  }

  onFinish(){
    this.updateTodo.emit(this.todo);
  }
  onDelete(){
    this.deleteTodo.emit(this.todo);
  }

}
