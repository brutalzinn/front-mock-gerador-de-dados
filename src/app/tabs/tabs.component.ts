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
  public processado: boolean;
  public textoProcessado: string;

  constructor(private httpGeradorDeDadosService: HttpGeradorDeDadosService) {
      this.formulario = new FormGroup({
          texto: new FormControl("", Validators.minLength(1))
      })
      this.processado = true;
      this.textoProcessado = "";
  }


  ngOnInit(): void {
  }

  processarTexto(){
    this.processado = false;
     this.httpGeradorDeDadosService.processarTexto(this.texto).subscribe(
      response => {
        console.log(response)
         this.textoProcessado = response
         setTimeout(() => {
         this.processado = true;
         }, 500);
      })

  }

  copiarTextoProcessado(){
    let texto = this.textoProcessado
     navigator.clipboard.writeText(this.textoProcessado).then(function () {
           console.log(`Copiado: ${texto}`);

    }, function (err) {
      console.log("Ocorreu um erro ao copiar.");
    });
  }

  get texto (): string {
    return this.formulario.get('texto')?.value ?? ""
  }

}
