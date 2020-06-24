import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  sign_in_email = new FormControl('');
  sign_in_password  = new FormControl('');

  sign_up_email = new FormControl('');
  sign_up_password = new FormControl('');

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  toggle(): void{
    document.querySelector('.sign-in-form').classList.toggle('hidden');
    document.querySelector('.sign-up-form').classList.toggle('hidden');
  }

  login(): void{
    const user = {
      email    : this.sign_in_email.value,
      password : this.sign_in_password.value
    };

    this.http.post('http://localhost:8000/auth/login' , user).subscribe(
      () =>{
        // localStorage.setItem('auth-token' , resp['auth-token']);
      }
    );

  }

  signup(): void{
    const user = {
      email    : this.sign_up_email.value,
      password : this.sign_up_password.value
    };
    this.http.post('http://localhost:8000/auth/sign_up' , user).subscribe(
      () =>{
        // localStorage.setItem('auth-token' , resp['auth-token']);
        // console.log('account created');
      }
    );

  }
}
