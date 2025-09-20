import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nada-details',
  imports: [CommonModule],
  templateUrl: './nada-details.html',
  styleUrl: './nada-details.css'
})
export class NadaDetails {
  
  productDetails = [
    {
      title: 'نشارة الدواجن',
      size: 'حجم التعبئة: 10 كجم',
      moisture: 'نسبة الرطوبة: 3% - 8%',
      benefits: 'الفوائد: امتصاص الرطوبة، تقليل الروائح، عزل حراري لحظائر الطيور.'
    },
    {
      title: 'نشارة الخيول',
      size: 'حجم التعبئة: 5 - 10 كجم',
      moisture: 'نسبة الرطوبة: 5% - 20%',
      benefits: 'الفوائد: راحة للإسطبلات، سطح آمن، امتصاص ممتاز، سهولة التنظيف.'
    },
    {
      title: 'كسر الاخشاب',
      size: '',
      moisture: 'الاستخدامات:',
      benefits: 'يتم استخداماتها في مضمار سباقات الخيل ( تسخدم لتقليل ضغط أرجل الخيول ويسهل امتصاص الصدمات وحماية الخيول وتحسين أداءها)'
    },
    {
      title: 'نشارة الألياف من نواتج تقليم النخيل',
      size: 'وسط زراعي بديل للتربة (قريبا)',
      moisture: '',
      benefits: 'الاستخدامات: تحسين خصوبة التربة، احتجاز الكربون، رفع الإنتاجية الزراعية.'
    }
  ];

  constructor() { }
}