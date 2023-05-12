import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageInterface, Translation } from '../interfaces/language.interface';
import translations_en  from '../../assets/translations/en.json';
import translations_pt  from '../../assets/translations/pt.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public listLanguages: Array<LanguageInterface> = [
  {
    title:"English",
    language:"en",
    translations: []
  },
  {
    title:"Português",
    language:"pt",
    translations: []
  }
  ]

 initialSetting: LanguageInterface = {
    title:"English",
    language:"en",
    translations: []
  };

  languageSelection: BehaviorSubject<LanguageInterface> =  new BehaviorSubject<LanguageInterface>(this.initialSetting);

 constructor(private httpClient: HttpClient) {
      let storageTheme = this.getLanguage()
      this.setLanguage(storageTheme)
   }

  setLanguage(language: string) {
    let item = this.listLanguages.find(lang => lang.language === language)
    if(item === null || item === undefined){
        return
    }
    localStorage.setItem("language", language)
    let url = "../../assets/translations/" + item.language + ".json"
     this.httpClient.get<Translation[]>(url).subscribe((resp) => {

          item!.translations = resp
          this.languageSelection.next(item!);
          console.log(item!)
     });

  }

  languageChanges(): Observable<LanguageInterface> {
    return this.languageSelection.asObservable();
  }

  getLanguage(){
    let currentLang = localStorage.getItem("language")
    return currentLang || 'en';
  }

  getLanguages(): Array<LanguageInterface>{
    return this.listLanguages
  }

  getKeyTranslation(key: string){
      let translation = this.languageSelection.value.translations
      let item = translation.find(lang => lang.key === key)
      if(item == null){
          return
      }
      return item.value
  }
}
