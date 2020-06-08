import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
