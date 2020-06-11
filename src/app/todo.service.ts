import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    {
      'title':'Finish frontend',
      'status':'Working'
    },
    {
      'title':'Finish backend',
      'status':'Yet to start'
    },
    {
      'title':'Make it secure',
      'status':'Yet to start'
    }
  ];

  constructor() { }

  featchTodo(){
    return this.todos;
  }
}
