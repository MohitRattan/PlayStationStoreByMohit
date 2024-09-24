import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent implements OnInit {
  public addressForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{6}$') 
      ]],
    });
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.http.post<any>("https://localhost:7068/api/Addresses", this.addressForm.value)
        .subscribe({
          next: (res) => {
            alert('Submission successful');
            this.router.navigate(['/order']);
            this.addressForm.reset();
          },
          error: (err) => {
            alert('Something went wrong');
            console.error(err); // Log error to console for debugging
          }
        });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
