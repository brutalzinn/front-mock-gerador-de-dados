import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeInterface } from '../interfaces/theme.interface';



@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {

 initialSetting: ThemeInterface = {
    themeOld: '',
    theme: 'dark',
    name: 'Dark'
  };

  themeSelection: BehaviorSubject<ThemeInterface> =  new BehaviorSubject<ThemeInterface>(this.initialSetting);

  constructor() {
      let storageTheme = this.getTheme()
      this.setTheme(storageTheme)
   }

  setTheme(theme: string) {
    this.themeSelection.next(
      {
        themeOld: this.themeSelection.value.themeOld,
        theme: theme,
        name: this.themeSelection.value.name
      });
      localStorage.setItem("theme", theme)
  }

  themeChanges(): Observable<ThemeInterface> {
    return this.themeSelection.asObservable();
  }

  getTheme(){
    let theme = localStorage.getItem("theme")
    return theme || 'dark';
  }
}
