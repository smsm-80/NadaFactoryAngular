
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nada-operations',
  imports: [CommonModule],
  templateUrl: './nada-operations.html',
  styleUrl: './nada-operations.css'
})
export class NadaOperations {
  
  operationsData = [
    {
      title: 'جمع واستلام المواد',
      subtitle: 'من مصادر موثوقة',
      icon: 'collection'
    },
    {
      title: 'الفرز والفحص',
      subtitle: 'للتأكد من الجودة',
      icon: 'sorting'
    },
    {
      title: 'تنظيف ومعالجة',
      subtitle: 'حسب المواصفات',
      icon: 'processing'
    },
    {
      title: 'التحكم بالرطوبة',
      subtitle: 'حسب الاستخدام',
      icon: 'moisture'
    },
    {
      title: 'التعبئة والتغليف',
      subtitle: 'الأوتوماتيكي',
      icon: 'packaging'
    },
    {
      title: 'التوزيع الآمن',
      subtitle: 'والدقيق للعملاء',
      icon: 'distribution'
    }
  ];

  constructor() { }

  // Method to get SVG icon based on type
  getIcon(iconType: string): string {
    const icons: { [key: string]: string } = {
      collection: `<path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/><path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>`,
      sorting: `<path d="M8 6l4-4 4 4"/><path d="M12 2v10.3a4 4 0 0 1 1.28 7.7H10.72A4 4 0 0 1 12 12.3V2z"/><path d="M8 18l4 4 4-4"/>`,
      processing: `<path d="M12 2l3.09 6.26L22 9l-5.91 3.74L12 22l-4.09-9.26L2 9l6.91-1.74L12 2z"/>`,
      moisture: `<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>`,
      packaging: `<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z"/><polyline points="3.27,6.96 12,12.01 20.73,6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>`,
      distribution: `<circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>`
    };
    return icons[iconType] || icons['collection'];
  }
}