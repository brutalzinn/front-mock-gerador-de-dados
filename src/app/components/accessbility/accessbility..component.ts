import { Component, OnInit } from '@angular/core';
import { AccessibilityService } from '../../services/accessibility.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemeInterface } from '../../interfaces/theme.interface';

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './accessbility.component.html',
})
export class AcessibilidadeComponent implements OnInit {

  public form: FormGroup;
  public listaTemas: Array<ThemeInterface> = [{theme:"dark", name:"Dark" },{theme:"minecraft", name:"Minecraft" }]

  constructor(private AccessibilityService: AccessibilityService)
  {
    this.form = new FormGroup(
    {
      theme: new FormControl('dark')
    })
  }

  ngOnInit(): void {
    let theme = this.AccessibilityService.getTheme()
    this.form.get('theme')?.setValue(theme)
  }

  toggleTheme() {
    this.AccessibilityService.setTheme(this.theme)
  }

  get theme () {
    return this.form.get('theme')?.value ?? "";
  }
}
