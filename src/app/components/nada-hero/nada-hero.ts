import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-hero',
  imports: [],
  templateUrl: './nada-hero.html',
  styleUrl: './nada-hero.css'
})
export class NadaHero {

constructor(public i18n: I18nService) {
  // الاشتراك في langChanges اختياري
  this.i18n.langChanges.subscribe(lang => {
    console.log('Language changed to:', lang);
    // يمكن هنا إعادة تحميل بيانات المكون إذا احتجت
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
