import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-vision2030',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nada-vision2030.html',
  styleUrl: './nada-vision2030.css'
})
export class NadaVision2030 {

  // fallback data (used only if translations not found)
  visionData = {
    title: 'علاقتنا برؤية المملكة 2030',
    objectives: [
      { icon: '🏛️', title: 'مجتمع حيوي وبيئة مستدامة', description: 'تقليل التلوث وتحسين جودة الحياة' },
      { icon: '💼', title: 'اقتصاد مزدهر', description: 'الابتكار الرقمي وتوفير بدائل محلية' },
      { icon: '🎯', title: 'وطن طموح', description: 'نموذج ناجح للقطاع الخاص في تحقيق التنمية المستدامة' }
    ],
    imageSrc: 'tree-stump-green-plant.jpg',
    imageAlt: 'نبتة خضراء تنمو من جذع شجرة'
  };

constructor(private i18n: I18nService) {
  // الاشتراك في langChanges اختياري فقط إذا تريد تنفيذ شيء عند تغير اللغة
  this.i18n.langChanges.subscribe(lang => {
    console.log('Language changed to:', lang);
    // مثال: إعادة تحميل بيانات المكون إذا احتجت
  });
}

// Getter للغة الحالية
get currentLang(): string {
  return this.i18n.currentLang;
}

  getObjectives(): any[] {
    const maybe = (this.i18n as any).translations?.[this.currentLang]?.['nada-vision2030']?.objectives;
    if (Array.isArray(maybe) && maybe.length) return maybe;
    return this.visionData.objectives;
  }

  getTranslation(key: string): string {
    return this.i18n.translate(key);
  }
}
