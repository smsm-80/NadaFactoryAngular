import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nada-future-plans',
  imports: [CommonModule],
  templateUrl: './nada-future-plans.html',
  styleUrl: './nada-future-plans.css'
})
export class NadaFuturePlans {
  
  plansData = {
    title: 'خططنا المستقبلية',
    plans: [
      {
        icon: '🌾',
        title: 'نشارة الألياف من نواتج تقليم النخيل منتج عالي الجودة'
      },
      {
        icon: '🤝',
        title: 'شراكات استراتيجية مع الشادات، المزارع ومراكز الإنتاج الحيواني'
      },
      {
        icon: '📈',
        title: 'توسيع الطاقة الإنتاجية لتلبية الطلب المحلي ودخول أسواق جديدة'
      },
      {
        icon: '🏆',
        title: 'الحصول على شهادات FSC و ISO 14001 لضمان الموثوقية البيئية والجودة'
      },
      {
        icon: '🏭',
        title: 'مكننة عمليات التصنيع'
      }
    ],
    imageSrc: 'forest-canopy-trees.jpg',
    imageAlt: 'منظر من الأسفل للأشجار العالية في الغابة'
  };

  constructor() { }

}