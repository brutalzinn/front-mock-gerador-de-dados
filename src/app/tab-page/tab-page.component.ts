import { Component, Input, OnInit } from '@angular/core';
import { HttpGeradorDeDadosService } from '../services/http-gerador-de-dados.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITab } from '../interfaces/tab.interface';

@Component({
  selector: 'tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() currentTab!: ITab;
  public formulario: FormGroup;
  public processado: boolean;
  public textoProcessado: string;
  public exemplo : string = `//Use o botão "placeholders" para obter a lista de placeholders disponíveis.
//Exemplo [GUID]
{
"CPF":"[CPF]"
}`;

  constructor(private httpGeradorDeDadosService: HttpGeradorDeDadosService) {
      this.formulario = new FormGroup({
          texto: new FormControl("", Validators.minLength(1))
      })
      this.processado = true;
      this.textoProcessado = "";
  }


  ngOnInit(): void {
      let textoCarregado = this.currentTab.texto
      if(textoCarregado === undefined){
          this.carregarTextoExemplo()
          return
      }
      this.carregarArquivoImportado()
  }

  carregarArquivoImportado(){
      let textoCarregado = this.currentTab.texto
      this.formulario.get('texto')?.setValue(textoCarregado)
      this.processarTexto()
  }

  carregarTextoExemplo(){
      this.formulario.get('texto')?.setValue(this.exemplo)
      this.processarTexto()
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
  salvar(){
    this.currentTab.texto = this.texto
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
