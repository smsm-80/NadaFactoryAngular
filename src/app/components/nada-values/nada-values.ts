import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nada-values',
  imports: [CommonModule],
  templateUrl: './nada-values.html',
  styleUrl: './nada-values.css'
})

export class NadaValues {
  
  values = [
    {
      icon: 'lightbulb',
      title: 'الابتكار',
      description: 'تطوير الآليات\nالتصنيع باستمرار'
    },
    {
      icon: 'check-circle',
      title: 'الجودة',
      description: 'منتجات بمعايير\nمحلية وعالمية عالية'
    },
    {
      icon: 'recycle',
      title: 'الاستدامة',
      description: 'الالتزام بممارسات إعادة التدوير\nوتقليل الانبعاثات الكربونية'
    },
    {
      icon: 'users',
      title: 'العمل الجماعي',
      description: 'روح الفريق\nأساس النجاح'
    },
    {
      icon: 'leaf',
      title: 'المسؤولية البيئية',
      description: 'مبادرات تقلل النفايات وتعزز\nالاستخدام الأمثل للموارد'
    }
  ];

  constructor() { }

  // Method to split description into lines for template
  getDescriptionLines(description: string): string[] {
    return description.split('\n');
  }
}