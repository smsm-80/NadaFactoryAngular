import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-nada-contact-us',
  imports: [CommonModule, FormsModule],
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
        value: 'info@nadafactory.sa',
        link: 'mailto:info@nadafactory.sa'
      },
      {
        icon: '📱',
        title: 'رقم الهاتف',
        value: '+966 54 787 7778',
        link: 'tel:+966547877778'
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

  isLoading = false;
  submitMessage = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(private contactService: ContactService) { }

  onSubmit() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.submitMessage = '';
    this.messageType = '';

    console.log('Form submitted:', this.formData);

    this.contactService.sendContactForm(this.formData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.messageType = 'success';
        this.submitMessage = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
        
        console.log('API Response:', response);
        this.resetForm();
      },
      error: (error) => {
        this.isLoading = false;
        this.messageType = 'error';
        
        if (error.status === 401) {
          this.submitMessage = 'خطأ في المصادقة. يرجى المحاولة مرة أخرى.';
        } else if (error.status === 400) {
          this.submitMessage = 'بيانات غير مكتملة. يرجى ملء جميع الحقول المطلوبة.';
        } else {
          this.submitMessage = 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.';
        }
        
        console.error('API Error:', error);
      }
    });
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