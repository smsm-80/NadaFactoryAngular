
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-nada-vision2030',
  imports: [CommonModule],
  templateUrl: './nada-vision2030.html',
  styleUrl: './nada-vision2030.css'
})
export class NadaVision2030 {
  
  visionData = {
    title: 'علاقتنا برؤية المملكة 2030',
    objectives: [
      {
        icon: '🏛️',
        title: 'مجتمع حيوي وبيئة مستدامة',
        description: 'تقليل التلوث وتحسين جودة الحياة'
      },
      {
        icon: '💼',
        title: 'اقتصاد مزدهر',
        description: 'الابتكار الرقمي وتوفير بدائل محلية'
      },
      {
        icon: '🎯',
        title: 'وطن طموح',
        description: 'يؤمن بالنجح للقطاع الخاص في تحقيق التنمية المستدامة'
      }
    ],
    imageSrc: 'tree-stump-green-plant.jpg',
    imageAlt: 'نبتة خضراء تنمو من جذع شجرة'
  };

  constructor() { }

}