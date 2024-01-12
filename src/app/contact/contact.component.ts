import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TopHeaderComponent } from '../header/top-header/top-header.component';
import { HeaderDirective } from '../CustomDirectives/header.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TopHeaderComponent, HeaderComponent, FooterComponent, HeaderDirective, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitting = false;
  submitted = false;

  submitForm() {
    // Simulate form submission delay
    this.submitting = true;
    setTimeout(() => {
      // Add logic to handle form submission (e.g., send data to a server)

      // For example, after successfully submitting the form, set submitted to true
      this.submitted = true;
      this.submitting = false;
    }, 1500);
  }

}
