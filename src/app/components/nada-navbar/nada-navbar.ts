import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-navbar',
  imports: [],
  templateUrl: './nada-navbar.html',
  styleUrl: './nada-navbar.css'
})
export class NadaNavbar {
  isOpen = false;

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

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleLang() {
    const next = this.currentLang === 'en' ? 'ar' : 'en';
    this.i18n.setLang(next);
  }

  getTranslation(key: string): string {
    return this.i18n.translate(key);
  }
}
