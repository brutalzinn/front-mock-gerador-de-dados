import { Component, OnInit } from '@angular/core';
import { HttpGeradorDeDadosService } from '../services/http-gerador-de-dados.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tab-group',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public formulario: FormGroup;
  public processando: boolean;
  public textoProcessado: string;

  constructor(private httpGeradorDeDadosService: HttpGeradorDeDadosService) {

      this.formulario = new FormGroup({
          texto: new FormControl(Validators.minLength(1))
      })
      this.processando = false;
      this.textoProcessado = "";
  }


  ngOnInit(): void {
  }

  processarTexto(){
      this.processando = true;
     this.httpGeradorDeDadosService.processarTexto(this.texto).subscribe(
      response => {
         this.textoProcessado = response
         this.processando = false;
      })
  }

  copiarTextoProcessado(){
     navigator.clipboard.writeText(this.textoProcessado).then(function () {
    }, function (err) {
      console.log("Ocorreu um erro ao copiar.");
    });
  }

  get texto () : string {
    return this.formulario.get('texto')?.value
  }

}
