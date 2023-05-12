import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageInterface } from '../interfaces/language.interface';
import { ThemeInterface } from '../interfaces/theme.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

 initialSetting: LanguageInterface = {
    name:"English",
    language:"en",
    translations: [{key: "title", value: "Mock Generator"}]
  };

  languageSelection: BehaviorSubject<LanguageInterface> =  new BehaviorSubject<LanguageInterface>(this.initialSetting);

 constructor() {
      let storageTheme = this.getLanguage()
      this.setLanguage(storageTheme)
   }

  setLanguage(lang: string) {
    this.languageSelection.next(
    {
        name:"English",
        language:"en",
        translations: [{key: "title", value: "Mock Generator"}]
    });
      localStorage.setItem("language", lang)
  }

  languageChanges(): Observable<LanguageInterface> {
    return this.languageSelection.asObservable();
  }

  getLanguage(){
    let currentLang = localStorage.getItem("language")
    return currentLang || 'en';
  }
}
