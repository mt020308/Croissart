import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  private mockAuthService = {
    login: (email: string, password: string): boolean => {
      if (email === 'admin@teste.com' && password === '123456') {
        localStorage.setItem('user', JSON.stringify({
          id: '1',
          name: 'Admin',
          email: email,
          isLoggedIn: true
        }));
        return true;
      }
      return false;
    }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;
      
      const { email, password } = this.loginForm.value;
      
      setTimeout(() => {
        const success = this.mockAuthService.login(email, password);
        
        if (success) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Email ou senha incorretos. Tente: admin@teste.com / 123456';
        }
        
        this.isLoading = false;
      }, 1500);
    } else {
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}