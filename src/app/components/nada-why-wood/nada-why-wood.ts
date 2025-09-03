
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nada-why-wood',
  imports: [CommonModule],
  templateUrl: './nada-why-wood.html',
  styleUrl: './nada-why-wood.css'
})
export class NadaWhyWood {
  
  woodData = {
    title: 'لماذا ندى الأخشاب؟',
    features: [
      {
        icon: '🔬',
        title: 'خبرة متخصصة في',
        subtitle: 'إعداة تدوير الأخشاب'
      },
      {
        icon: '🏗️',
        title: 'تقنيات متطورة',
        subtitle: 'وجودة مضمونة'
      },
      {
        icon: '🌿',
        title: 'التزام بالمعايير',
        subtitle: 'البيئية'
      },
      {
        icon: '📋',
        title: 'حلول متخصصة حسب',
        subtitle: 'احتياجات العملاء'
      }
    ],
    imageSrc: 'stacked-wood-lumber.jpg',
    imageAlt: 'قطع خشبية مكدسة ومرتبة'
  };

  constructor() { }

}