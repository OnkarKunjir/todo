import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    {
      'id':'0',
      'title':'Finish frontend',
      'status':'Working'
    },
    {
      'id':'1',
      'title':'Finish backend',
      'status':'Yet to start'
    },
    {
      'id':'2',
      'title':'Make it secure',
      'status':'Yet to start'
    },
    {
      'id':'3',
      'title':'Make landing page mobile friendly',
      'status':'Yet to start'
    }
  ];
  

  todoChange: Subject<any> = new Subject<string>();

  constructor() { }

  featchTodo(){
    // featch the todos from the server
    this.todoChange.next(this.todos);
  }

  deleteTodo(todo){
    // delete todo form list and then send request to server
    this.todos = this.todos.filter( t => t.id != todo.id );
    this.todoChange.next(this.todos);
  }

  updateTodo(todo){
    // update status of todo to new status 
    this.todos.map(t=>{
      if(t.id == todo.id){
        t.title = todo.title;
        t.status = todo.status;
      }
    });
    this.todoChange.next(this.todos);
  }

  search(query){
    // INCOMPLETE
    if(query.length > 0){
      let re = new RegExp(query , 'i');
      this.todos = this.todos.filter( t =>  t.title.search(re) > -1 );
      this.todoChange.next(this.todos);
    }
    else{
      this.featchTodo();
    }
  }

  private getId():string{
    return this.todos.length.toString();
  }

  addTodo() : void{

    this.todos.push(
      {
        'id': this.getId(),
        'title':'New todo',
        'status':'Yet to start'
      }
    );

    this.todoChange.next(this.todos);
  }
}
