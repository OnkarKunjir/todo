import { Injectable } from '@angular/core';
import { Observable, Subject ,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:any = [];
  __base_url = 'http://localhost:8000/';

  todoChange: Subject<any> = new Subject<string>();

  constructor(private http: HttpClient) { }

  featchTodo(){
    // featch the todos from the server

    if(this.todos.length == 0){
      this.http.get(this.__base_url + 'api/featch').subscribe(
        data => {
          this.todos = data;
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
    this.http.delete(this.__base_url + 'api/remove/' + todo.id).subscribe(
      ()=>{
        this.todos = this.todos.filter( t => t.id != todo.id );
        this.todoChange.next(this.todos);
      }
    );
  }

  updateTodo(todo){
    // update status of todo to new status 
    this.http.put(this.__base_url + 'api/update' , todo).subscribe(
      () =>{
        this.todos.map(t=>{
          if(t.id == todo.id){
            t.title = todo.title;
            t.status = todo.status;
          }
        });
        this.todoChange.next(this.todos);
      }
    );
   
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
    let new_todo = {
      'id': this.getId(),
      'title':'New todo',
      'status':'Yet to start'
    };

    this.http.post(this.__base_url + 'api/add' , new_todo).subscribe(
      ()=>{
        this.todos.push(new_todo);
        this.todoChange.next(this.todos);
      }
    );

    
  }
}
