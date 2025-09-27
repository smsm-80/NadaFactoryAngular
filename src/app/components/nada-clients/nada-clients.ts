
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-clients',
  imports: [CommonModule],
  templateUrl: './nada-clients.html',
  styleUrl: './nada-clients.css'
})
  export class NadaClients {
    
    clients = [
      {
        name: 'محجر نادي',
        subtitle: 'سباقات الخيل'
      },
      {
        name: 'مستشفى نادي',
        subtitle: 'سباقات الخيل'
      },
      {
        name: 'شركة دواجن',
        subtitle: 'الوطنية'
      },
      {
        name: 'شركة دواجن',
        subtitle: 'الرمحية'
      },
      {
        name: 'شركة دواجن',
        subtitle: 'التنمية'
      }
    ];

  constructor(public i18n: I18nService) {
    // الاشتراك في تغييرات اللغة اختياري إذا أردت تنفيذ شيء عند التغيير
    this.i18n.langChanges.subscribe(lang => {
      console.log('Language changed to:', lang);
      // يمكن هنا إعادة تحميل بيانات المكون إذا احتجت
    });
  }

  /** Getter للغة الحالية */
  get currentLang(): string {
    return this.i18n.currentLang;
  }

  /** دالة ترجمة */
    getTranslation(key: string) {
      return this.i18n.translate(key);
    }
  }