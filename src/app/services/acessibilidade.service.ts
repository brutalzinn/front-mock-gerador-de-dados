import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TemaInterface } from '../interfaces/tema.interface';



@Injectable({
  providedIn: 'root'
})
export class AcessibilidadeService {

 initialSetting: TemaInterface = {
    temaAnterior: '',
    tema: 'dark',
    nome: 'Dark'
  };

  themeSelection: BehaviorSubject<TemaInterface> =  new BehaviorSubject<TemaInterface>(this.initialSetting);

  constructor() {
      let storageTheme = this.getTheme()
      this.setTheme(storageTheme)
   }

  setTheme(theme: string) {
    this.themeSelection.next(
      {
        temaAnterior: this.themeSelection.value.temaAnterior,
        tema: theme,
        nome: this.themeSelection.value.nome
      });
      localStorage.setItem("theme", theme)
  }

  themeChanges(): Observable<TemaInterface> {
    return this.themeSelection.asObservable();
  }

  getTheme(){
    let theme = localStorage.getItem("theme")
    return theme || 'dark';
  }
}
