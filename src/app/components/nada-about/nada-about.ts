import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-about',
  imports: [],
  templateUrl: './nada-about.html',
  styleUrl: './nada-about.css'
})
export class NadaAbout {
  constructor(public i18n: I18nService) {
    // الاشتراك في تغييرات اللغة اختياري إذا أردت تنفيذ شيء عند التغيير
    this.i18n.langChanges.subscribe(lang => {
      console.log('Language changed to:', lang);
      // يمكن هنا إعادة تحميل بيانات المكون إذا احتجت
    });
  }

  /** Getter لقراءة اللغة الحالية مباشرة */
  get currentLang(): string {
    return this.i18n.currentLang;
  }

  /** دالة ترجمة */

  getTranslation(key: string): string {
    return this.i18n.translate(key);
  }

}
