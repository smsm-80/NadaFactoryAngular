import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-future-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nada-future-plans.html',
  styleUrl: './nada-future-plans.css'
})
export class NadaFuturePlans {

  plansData = {
    title: 'خططنا المستقبلية',
    plans: [
      { icon: '🌾', title: 'نشارة الألياف من نواتج تقليم النخيل منتج عالي الكفاءة' },
      { icon: '🤝', title: 'شراكات استراتيجية مع البلديات، المزارع ،ومراكز الإنتاج الحيواني' },
      { icon: '📈', title: 'توسيع الطاقة الإنتاجية لتلبية الطلب المحلي ودخول أسواق جديدة' },
      { icon: '🏆', title: 'الحصول على شهادات FSC و ISO 14001 لتعزيز الموثوقية البيئية والجودة' },
      { icon: '🏭', title: 'ميكنة عمليات التصنيع' }
    ],
    imageSrc: 'forest-canopy-trees.jpg',
    imageAlt: 'منظر من الأسفل للأشجار العالية في الغابة'
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

  getPlanTitle(index: number): string {
    const maybe = (this.i18n as any).translations?.[this.currentLang]?.['nada-future-plans']?.plans;
    if (Array.isArray(maybe) && maybe[index]) {
      return maybe[index];
    }
    return '';
  }
}
