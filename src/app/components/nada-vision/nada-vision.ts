import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-vision',
  imports: [],
  templateUrl: './nada-vision.html',
  styleUrl: './nada-vision.css'
})
export class NadaVision {

constructor(private i18n: I18nService) {
  // الاشتراك في langChanges اختياري فقط إذا تريد تنفيذ شيء عند تغير اللغة
  this.i18n.langChanges.subscribe(lang => {
    console.log('Language changed to:', lang);
    // مثال: إعادة تحميل بيانات المكون إذا احتجت
  });
}

// Getter للغة الحالية
get currentLang(): string {
  return this.i18n.currentLang;
}

  getTranslation(key: string): string {
    return this.i18n.translate(key);
  }

}
