import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  private mockAuthService = {
    register: (name: string, email: string, password: string): boolean => {
      try {
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (existingUsers.find((user: any) => user.email === email)) {
          return false; 
        }

        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          password 
        };

        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        
        localStorage.setItem('user', JSON.stringify({
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          isLoggedIn: true
        }));

        return true;
      } catch (error) {
        return false;
      }
    }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { 
      validators: this.passwordMatchValidator 
    });
  }

  passwordMatchValidator(control: AbstractControl): {[key: string]: any} | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { mismatch: true };
    }
    
    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;
      this.successMessage = null;
      
      const { name, email, password } = this.registerForm.value;
      
      setTimeout(() => {
        const success = this.mockAuthService.register(name, email, password);
        
        if (success) {
          this.successMessage = 'Conta criada com sucesso! Redirecionando...';
          
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        } else {
          this.errorMessage = 'Este email já está cadastrado. Tente outro email.';
        }
        
        this.isLoading = false;
      }, 1500);
    } else {
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.markAsTouched();
      });
    }
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
}