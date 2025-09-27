import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../service/contact.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-contact-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './nada-contact-us.html',
  styleUrls: ['./nada-contact-us.css']
})
export class NadaContactUs {

  contactData = {
    title: 'تواصل معنا',
    subtitle: 'نحن هنا لمساعدتك والإجابة على جميع استفساراتك',
    contactInfo: [
      { icon: '📧', title: 'البريد الإلكتروني', value: 'info@nadafactory.sa', link: 'mailto:info@nadafactory.sa' },
      { icon: '📱', title: 'رقم الهاتف', value: '+966 54 787 7778', link: 'tel:+966547877778' },
      { icon: '📍', title: 'العنوان', value: 'الرياض، المملكة العربية السعودية', link: null },
      { icon: '🕒', title: 'ساعات العمل', value: 'الأحد - الخميس: 8:00 ص - 5:00 م', link: null }
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

  formData = { name: '', email: '', phone: '', subject: '', message: '' };
  isLoading = false;
  submitMessage = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(private contactService: ContactService, public i18n: I18nService) {
    // الاشتراك اختياري، فقط إذا تريد فعل شيء عند تغيير اللغة
    this.i18n.langChanges.subscribe(lang => {
      console.log('Language changed to:', lang);
    });
  }

  /** Getter للغة الحالية */
  get currentLang(): string {
    return this.i18n.currentLang;
  }

  /** دالة ترجمة */
  getTranslation(key: string): string {
    return this.i18n.translate(key);
  }

  /** إرسال النموذج */
  onSubmit() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.submitMessage = '';
    this.messageType = '';

    this.contactService.sendContactForm(this.formData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.messageType = 'success';
        this.submitMessage = this.getTranslation('nada-contact-us.alerts.success') 
          || 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
        this.resetForm();
      },
      error: (error) => {
        this.isLoading = false;
        this.messageType = 'error';

        if (error.status === 401) {
          this.submitMessage = this.getTranslation('nada-contact-us.alerts.unauthorized') 
            || 'خطأ في المصادقة. يرجى المحاولة مرة أخرى.';
        } else if (error.status === 400) {
          this.submitMessage = this.getTranslation('nada-contact-us.alerts.badRequest') 
            || 'بيانات غير مكتملة. يرجى ملء جميع الحقول المطلوبة.';
        } else {
          this.submitMessage = this.getTranslation('nada-contact-us.alerts.genericError') 
            || 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.';
        }

        console.error('API Error:', error);
      }
    });
  }

  /** إعادة تعيين النموذج */
  resetForm() {
    this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
  }

  /** الحصول على معلومات الاتصال مع دعم الترجمة */
  getContactInfo(): ContactItem[] {
    const translated = this.i18n.translate('nada-contact-us.contactInfo');
    if (translated) {
      try {
        const parsed = typeof translated === 'string' ? JSON.parse(translated) : translated;
        if (Array.isArray(parsed)) return parsed;
      } catch (err) {
        console.warn('Failed to parse contactInfo translation', err);
      }
    }
    return this.contactData.contactInfo;
  }
}

type ContactItem = {
  icon: string;
  title: string;
  value: string;
  link: string | null;
};
