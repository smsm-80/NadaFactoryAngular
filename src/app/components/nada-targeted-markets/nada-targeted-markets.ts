import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-targeted-markets',
  imports: [CommonModule],
  templateUrl: './nada-targeted-markets.html',
  styleUrl: './nada-targeted-markets.css'
})
export class NadaTargetedMarkets {
  
  marketData = {
    title: 'الأسواق المستهدفة',
    markets: [
      {
        icon: '🐴',
        title: 'إسطبلات الخيول ونوادي الفروسية',
        description: 'نشارة مخصصة توفر بيئة امنة وصحية للخيول'
      },
      {
        icon: '🌾',
        title: 'مشاريع الاستزراع الزراعي المستدام',
        description: 'نشارة الالياف، من نواتج تقليم النخيل'
      },
      {
        icon: '🏭',
        title: 'الشركات الصناعية في الاقتصاد الدائري',
        description: 'شراكات استراتيجية لتحقيق الاستدامة'
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