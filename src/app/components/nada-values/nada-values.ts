import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-nada-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nada-values.html',
  styleUrl: './nada-values.css'
})
export class NadaValues {
  values: any[] = [];

  // icons stay here, order matches translations
  private defaultIcons = ['lightbulb', 'check-circle', 'recycle', 'users', 'leaf'];
constructor(private i18n: I18nService) {
  this.loadValues();

  // تحديث القيم عند تغيير اللغة
  this.i18n.langChanges.subscribe(() => {
    this.loadValues();
  });
}

// Getter للغة الحالية
get currentLang(): string {
  return this.i18n.currentLang;
}

  private loadValues() {
    const translated = this.i18n.translate('nada-values.values');
    if (Array.isArray(translated)) {
      this.values = translated.map((v: any, idx: number) => ({
        icon: this.defaultIcons[idx] || 'circle',
        title: v.title,
        description: v.description
      }));
    }
  }

  getDescriptionLines(description: string): string[] {
    return (description || '').split('\n');
  }

  getTranslation(key: string): string {
    return this.i18n.translate(key);
  }
}
