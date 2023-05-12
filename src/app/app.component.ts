import { Component, Renderer2 } from '@angular/core';
import { AccessibilityService } from './services/accessibility.service';
import { LanguageService } from './services/language.service';
import { LanguageInterface } from './interfaces/language.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  {

  constructor (private accessibilityService: AccessibilityService, private languageService: LanguageService, private renderer: Renderer2) {}
    ngOnInit(): void {
    this.accessibilityService.themeChanges().subscribe(theme => {
      if (theme.themeOld) {
        this.renderer.setAttribute(document.body, "data-bs-theme", theme.themeOld);
      }
      this.renderer.setAttribute(document.body, "data-bs-theme", theme.theme);
    })
  }
}
