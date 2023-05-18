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
  public textProcessado: string;
  public exemplo : string = `//Use o botão "placeholders" para obter a lista de placeholders disponíveis.
//Exemplo [GUID]
{
"CPF":"[CPF]"
}`;

  constructor(private httpGeradorDeDadosService: HttpGeradorDeDadosService) {
      this.form = new FormGroup({
          text: new FormControl("", Validators.minLength(1))
      })
      this.processado = true;
      this.textProcessado = "";
  }

  ngOnInit(): void {
      this.loadFileImported()
  }

  loadFileImported(){
      let textCarregado = this.currentTab.text
      this.form.get('text')?.setValue(textCarregado)
      this.processText()
  }

  loadTextExample(){
      this.form.get('text')?.setValue(this.exemplo)
      this.processText()
  }

  processText(){
    this.processado = false;
     this.httpGeradorDeDadosService.processText(this.text).subscribe(
      response => {
        console.log(response)
         this.textProcessado = response
         setTimeout(() => {
              this.processado = true;
         }, 500);
      })

  }
  save(){
    this.currentTab.text = this.text
  }

  copyTextProcessed(){
    let text = this.textProcessado
     navigator.clipboard.writeText(this.textProcessado).then(function () {
           console.log(`Copiado: ${text}`);

    }, function (err) {
      console.log("Ocorreu um erro ao copiar e eu não vou te contar.");
    });
  }

  get text (): string {
    return this.form.get('text')?.value ?? ""
  }
}
