import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  //info do emailjs
  private readonly emailjsConfig = {
    serviceID: 'email',
    templateID: 'contato',
    userID: '5_gxKuJdJyJXToLnw'
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    emailjs.init(this.emailjsConfig.userID);
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

    try {
      const formData = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      };

      const response = await emailjs.send(
        this.emailjsConfig.serviceID,
        this.emailjsConfig.templateID,
        formData
      );

      if (response.status === 200) {
        this.submitSuccess = true;
        this.contactForm.reset();
        
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      this.submitError = true;
      this.errorMessage = 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
    } finally {
      this.isSubmitting = false;
    }
  }

  private markAllAsTouched() {
    Object.values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}