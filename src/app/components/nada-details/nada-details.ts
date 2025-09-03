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
      size: 'حجم النعمة: 10 كجم',
      moisture: 'نسبة الرطوبة: 3% - 8%',
      benefits: 'الفوائد: امتصاص الرطوبة، تقليل الروائح، عزل حراري لحظائر الطيور.'
    },
    {
      title: 'نشارة الخيول',
      size: 'حجم التعمبة: 5 - 10 كجم',
      moisture: 'نسبة الرطوبة: 5% - 20%',
      benefits: 'الفوائد: راحة للاسطبلات، سطح آمن، امتصاص ممتاز، سهولة التنظيف.'
    },
    {
      title: 'كسر الاختشاب',
      size: '',
      moisture: 'الاستخدامات:',
      benefits: 'يتم استخداماتها في مضمار سباقات الخيل ( تسخدم لتقليل ضغط أرجل الخيل، وسهل امتصاصها، امتصاص الصدمات وحماية الخيول وتحسين أداءها)'
    },
    {
      title: 'نشارة الألياف من نواتج تقليم النخيل',
      size: 'وسط زراعي بديل للبيره (هيريا)',
      moisture: '',
      benefits: 'الاستخدامات: تحسين خصوبة التربة، احتباز الكربون، رفع الانتاجية الزراعية.'
    }
  ];

  constructor() { }
}