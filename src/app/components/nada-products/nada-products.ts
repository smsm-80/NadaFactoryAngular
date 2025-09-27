
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-products',
  imports: [CommonModule],
  templateUrl: './nada-products.html',
  styleUrl: './nada-products.css'
})
export class NadaProducts {

  products = [
    {
      name: 'نشارة حضارة الدواجن',
      icon: 'sawdust'
    },
    {
      name: 'نشارة اسطبلات الخيل',
      icon: 'horse-stable'
    },
    {
      name: 'كسار اخشاب مضمار السباق',
      icon: 'track-chips'
    },
    {
      name: 'نشارة الياف النخيل',
      icon: 'palm-fiber'
    },
    {
      name: 'الواح بديل الخشب WPC',
      icon: 'wpc-boards'
    },
    {
      name: 'الواح الخشب MDF',
      icon: 'mdf-boards'
    },
    {
      name: 'اعلاف حيوانية مركبة',
      icon: 'animal-feed'
    }
  ];


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