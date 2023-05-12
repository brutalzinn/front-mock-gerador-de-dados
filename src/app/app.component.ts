import { Component, Renderer2 } from '@angular/core';
import { AccessibilityService } from './services/accessibility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  {

  title = 'Gerador de mocks';
  constructor (private AccessibilityService: AccessibilityService, private renderer: Renderer2) {}
    ngOnInit(): void {
    this.AccessibilityService.themeChanges().subscribe(theme => {
      if (theme.themeOld) {
        this.renderer.setAttribute(document.body, "data-bs-theme", theme.themeOld);
      }
      this.renderer.setAttribute(document.body, "data-bs-theme", theme.theme);
    })
  }
}
