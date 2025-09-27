import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-environmental-impact',
  imports: [CommonModule],
  templateUrl: './nada-environmental-impact.html',
  styleUrl: './nada-environmental-impact.css'
})
export class NadaEnvironmentalImpact {
  
  impactData = {
    title: 'الأثر البيئي والاقتصادي',
    impacts: [
      {
        icon: '🌱',
        title: 'دعم الاقتصاد الدائري',
        description: 'تحويل النفايات إلى موارد يعزز الكفاءة الاقتصادية وبيئية'
      },
      {
        icon: '📉',
        title: 'الحياد الكربوني',
        description: 'تقليل الانبعاثات ودعم مستهدفات المملكة للوصول لصفر كربون بحلول 2060'
      },
      {
        icon: '💼',
        title: 'فرص وظيفية',
        description: 'توظيف وتأهيل الكوادر السعودية في قطاع الصناعات التحويلية الخضراء'
      }
    ],
    images: [
      {
        src: 'wood-waste-chips.jpg',
        alt: 'نفايات الخشب المعاد تدويرها'
      },
      {
        src: 'stacked-logs-forest.jpg', 
        alt: 'أخشاب مكدسة في الغابة'
      }
    ]
  };


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
  getTranslation(key: string) {
    return this.i18n.translate(key);
  }

}