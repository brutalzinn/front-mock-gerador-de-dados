import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LanguageInterface } from '../../interfaces/language.interface';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public form: FormGroup;
  public listLanguages: Array<LanguageInterface> = [
  {
    name:"English",
    language:"en",
    translations: [{key: "title", value: "Mock Generator"}]
  },
  {
    name:"Português",
    language:"pt",
    translations: [{key: "title", value: "Gerador de Mocks"}]
  }
  ]


  constructor(private languageService: LanguageService)
  {
    this.form = new FormGroup(
    {
      language: new FormControl('language')
    })
  }

  ngOnInit(): void {
    let theme = this.languageService.getLanguage()
    this.form.get('theme')?.setValue(theme)
  }

  toggleTheme() {
    this.languageService.setLanguage(this.language)
  }

  get language () {
    return this.form.get('language')?.value ?? "";
  }

}
