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

  constructor(private languageService: LanguageService)
  {
    this.form = new FormGroup(
    {
      language: new FormControl('en')
    })
  }

  ngOnInit(): void {
    let lang = this.languageService.getLanguage()
    this.form.get('language')?.setValue(lang)
  }

  toggleLanguage() {
    this.languageService.setLanguage(this.language)
    console.log(this.language)
  }

  getLanguages(): Array<LanguageInterface>{
    return this.languageService.getLanguages();
  }

  get language () {
    return this.form.get('language')?.value ?? "";
  }

}
