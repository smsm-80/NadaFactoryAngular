import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private translations: { [lang: string]: any } = {};
  private langSubject = new BehaviorSubject<string>('ar'); // اللغة الحالية
  langChanges: Observable<string> = this.langSubject.asObservable();

  constructor(private http: HttpClient) {
    // تحميل اللغات الأساسية عند بدء التطبيق
    this.loadLang('en');
    this.loadLang('ar');
  }

  /** الحصول على اللغة الحالية */
  get currentLang(): string {
    return this.langSubject.value;
  }

  /** تغيير اللغة */
  setLang(lang: string) {
    if (this.translations[lang]) {
      this.langSubject.next(lang);
    } else {
      this.loadLang(lang).then(() => this.langSubject.next(lang));
    }
  }

  /** تحميل ملف الترجمة */
  async loadLang(lang: string): Promise<void> {
    try {
      const data = await this.http.get<any>(`/assets/i18n/${lang}.json`).toPromise();
      this.translations[lang] = data || {};
    } catch (e) {
      console.warn('Failed to load lang', lang, e);
      this.translations[lang] = {};
    }
  }

  /**
   * ترجمة نص
   * يدعم string أو arrays/objects
   */
  translate(key: string): any {
    const lang = this.currentLang;
    const parts = key.split('.');
    let value: any = this.translations[lang] || {};
    for (const p of parts) {
      if (value && p in value) value = value[p]; 
      else { value = undefined; break; }
    }
    return value ?? key; // fallback للنص الأصلي إذا لم يوجد
  }
}
