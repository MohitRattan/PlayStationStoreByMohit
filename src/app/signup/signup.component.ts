import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule for forms
import { CommonModule } from '@angular/common';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Import ReactiveFormsModule
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] // Corrected styleUrls instead of styleUrl
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;  // Use the non-null assertion operator
  base64Image: string | null = null; // For storing the base64 image

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      user_name: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      user_password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
      profile_image: [null, Validators.required] // Add form control for the profile image
    }, { validators: this.passwordsMatch });
  }

  // Validate if passwords match
  passwordsMatch(group: FormGroup) {
    const password = group.get('user_password')?.value;
    const confirmPassword = group.get('confirmpassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Handle file input change event and convert the file to base64
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        // Extract base64 data from the full base64 string
        const base64Data = base64Image.split(',')[1];
        this.signupForm.patchValue({ profile_image: base64Data });
      };
      reader.readAsDataURL(file);
    }
  }
  

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }

    const formData = {
      user_name: this.signupForm.get('user_name')?.value,
      user_email: this.signupForm.get('user_email')?.value,
      user_password: this.signupForm.get('user_password')?.value,
      confirmpassword: this.signupForm.get('confirmpassword')?.value,
      profile_image: this.signupForm.get('profile_image')?.value // Include the base64 image in the form data
    };

    // Send the form data, including the base64-encoded image
    this.http.post('https://localhost:7272/api/signups', formData).subscribe(
      response => {
        console.log('Signup successful!', response);
      },
      error => {
        console.error('Error during signup', error);
      }
    );
  }
}
