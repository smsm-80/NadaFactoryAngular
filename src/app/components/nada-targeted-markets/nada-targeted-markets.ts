import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  constructor() { }

}