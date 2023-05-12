import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss']
})
export class TranslatorComponent {
  @Input() key = '';

  constructor(private languageService: LanguageService) { }

 get getTranslate() {
      return this.languageService.getKeyTranslation(this.key) ?? "TRANSLATE_NOT_FOUND"
  }

}
