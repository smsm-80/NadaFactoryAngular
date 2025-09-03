
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nada-contact-us',
  imports: [CommonModule,FormsModule],
  templateUrl: './nada-contact-us.html',
  styleUrl: './nada-contact-us.css'
})
export class NadaContactUs {
  
  contactData = {
    title: 'تواصل معنا',
    subtitle: 'نحن هنا لمساعدتك والإجابة على جميع استفساراتك',
    contactInfo: [
      {
        icon: '📧',
        title: 'البريد الإلكتروني',
        value: 'info@nadawood.com',
        link: 'mailto:info@nadawood.com'
      },
      {
        icon: '📱',
        title: 'رقم الهاتف',
        value: '+966 11 234 5678',
        link: 'tel:+966112345678'
      },
      {
        icon: '📍',
        title: 'العنوان',
        value: 'الرياض، المملكة العربية السعودية',
        link: null
      },
      {
        icon: '🕒',
        title: 'ساعات العمل',
        value: 'الأحد - الخميس: 8:00 ص - 5:00 م',
        link: null
      }
    ],
    formFields: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      subject: 'الموضوع',
      message: 'الرسالة',
      submit: 'إرسال الرسالة'
    }
  };

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  constructor() { }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }

}