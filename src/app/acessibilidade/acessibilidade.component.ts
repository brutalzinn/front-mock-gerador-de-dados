import { Component, OnInit } from '@angular/core';
import { AcessibilidadeService } from '../services/acessibilidade.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TemaInterface } from '../interfaces/tema.interface';

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './acessibilidade.component.html',
})
export class AcessibilidadeComponent implements OnInit {

  public formulario: FormGroup;
  public listaTemas: Array<TemaInterface> = [{tema:"dark", nome:"Dark" },{tema:"minecraft", nome:"Minecraft" }]

  constructor(private acessibilidadeService: AcessibilidadeService)
  {
    this.formulario = new FormGroup(
    {
      tema: new FormControl('dark')
    })
  }

  ngOnInit(): void {
    let tema = this.acessibilidadeService.getTheme()
    this.formulario.get('tema')?.setValue(tema)
  }

  toggleTheme() {
    this.acessibilidadeService.setTheme(this.tema)
  }

  get tema () {
    return this.formulario.get('tema')?.value ?? "";
  }
}
