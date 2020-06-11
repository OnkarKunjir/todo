import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    {
      'id':'1',
      'title':'Finish frontend',
      'status':'finished'
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
}
