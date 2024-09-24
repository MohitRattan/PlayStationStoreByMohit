import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      user_email: ['', [Validators.required, Validators.email]],
      user_password: ['', Validators.required]
    });
  }

  login(): void {
    this.http.get<any[]>('https://localhost:7272/api/signups').subscribe(
        
      (res) => {
        console.log('API Response:', res);
        console.log('Login Form Values:', this.loginForm.value);
        debugger;

        const signupUser = res.find((a: any) => {
          return (
            a.user_email === this.loginForm.value.user_email &&
            a.user_password === this.loginForm.value.user_password
          );
        });
        console.log('signupuser:',signupUser.user_email);
        console.log('signup ',signupUser.user_password);

    
        if (signupUser) { 
          localStorage.setItem('signupUser', JSON.stringify(signupUser));
          this.router.navigate(['/playstation']);
          
        } else {
          alert('User not found');
        }
      },
      (err) => {
        console.error('Error occurred:', err); 
        alert('Something went wrong');
      }
    );
  }
    

}
