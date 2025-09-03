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
        description: 'شارة محضرة تؤمن بيئة نموذجية للخيول'
      },
      {
        icon: '🌾',
        title: 'مشاريع الاستزراع الزراعي المستدام',
        description: 'شارة الآلهة، من نواتج تقليل النخيل'
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