import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    {
      'id':'1',
      'title':'Finish frontend',
      'status':'Working'
    },
    {
      'id':'2',
      'title':'Finish backend',
      'status':'Yet to start'
    },
    {
      'id':'3',
      'title':'Make it secure',
      'status':'Yet to start'
    }
  ];

  constructor() { }

  featchTodo(){
    return this.todos;
  }

  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.id != todo.id );
    return this.todos;
  }

  updateTodo(todo){
    
    this.todos.map(t=>{
      if(t.id == todo.id){
              t.status = todo.status;
      }
    });
    return this.todos;
  }
}
