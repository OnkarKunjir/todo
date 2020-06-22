import { Injectable } from '@angular/core';
import { Observable, Subject ,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:any = [];
  

  todoChange: Subject<any> = new Subject<string>();

  constructor(private http: HttpClient) { }

  featchTodo(){
    // featch the todos from the server

    if(this.todos.length == 0){
      this.http.get(window.location.origin + '/api/').subscribe(
        data => {
          this.todos = data;
          console.log(data);
          this.todoChange.next(this.todos);
        }
      );  
    }
    else{
      this.todoChange.next(this.todos);
    }
    
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
      let temp = this.todos.filter( t =>  t.title.search(re) > -1 );
      this.todoChange.next(temp);
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
