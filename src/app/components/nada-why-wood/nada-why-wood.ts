
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-why-wood',
  imports: [CommonModule],
  templateUrl: './nada-why-wood.html',
  styleUrl: './nada-why-wood.css'
})
export class NadaWhyWood {
  
  woodData = {
    title: 'لماذا ندى الأخشاب؟',
    features: [
      {
        icon: '🔬',
        title: 'خبرة متخصصة في',
        subtitle: 'إعداة تدوير الأخشاب'
      },
      {
        icon: '🏗️',
        title: 'تقنيات متطورة',
        subtitle: 'وجودة مضمونة'
      },
      {
        icon: '🌿',
        title: 'التزام بالمعايير',
        subtitle: 'البيئية'
      },
      {
        icon: '📋',
        title: 'حلول متخصصة حسب',
        subtitle: 'احتياجات العملاء'
      }
    ],
    imageSrc: 'stacked-wood-lumber.jpg',
    imageAlt: 'قطع خشبية مكدسة ومرتبة'
  };

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

  getTranslation(key: string) {
    return this.i18n.translate(key);
  }

}