import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITab } from 'src/app/interfaces/tab.interface';
import { HttpGeradorDeDadosService } from 'src/app/services/http-gerador-de-dados.service';

@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() currentTab!: ITab;
  public form: FormGroup;
  public processado: boolean;
  public textoProcessado: string;
  public exemplo : string = `//Use o botão "placeholders" para obter a lista de placeholders disponíveis.
//Exemplo [GUID]
{
"CPF":"[CPF]"
}`;

  constructor(private httpGeradorDeDadosService: HttpGeradorDeDadosService) {
      this.form = new FormGroup({
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
      this.form.get('texto')?.setValue(textoCarregado)
      this.processarTexto()
  }

  carregarTextoExemplo(){
      this.form.get('texto')?.setValue(this.exemplo)
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
      console.log("Ocorreu um erro ao copiar e eu não vou te contar.");
    });
  }

  get texto (): string {
    return this.form.get('texto')?.value ?? ""
  }
}
