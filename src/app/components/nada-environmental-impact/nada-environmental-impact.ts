import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
        description: 'تحويل النفايات إلى موارد ذات قيمة اقتصادية وبيئية'
      },
      {
        icon: '📉',
        title: 'الحياد الكربوني',
        description: 'تقليل الانبعاثات ودعم مستهدفات المملكة للوصول لصفر كربون بحلول 2060'
      },
      {
        icon: '💼',
        title: 'فرص وظيفية',
        description: 'توظيف وتأهيل الكوادر السعودية في قطاع الصناعات التجارية الخضراء'
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

  constructor() { }

}