import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import saveAs from 'file-saver';
import { ITab } from 'src/app/interfaces/tab.interface';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {
  @Input() tabs: Array<ITab> = [];

  constructor() { }
  ngOnInit(): void {
  }

  public downLoadUpdates() {
    let data = JSON.stringify(this.tabs);
    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, "list_documents.json");
  }

    public loadFileByJson(event: any) {
    const reader = new FileReader();
    try {
      reader.onload = (e: any) => {
        let conteudoArquivoJson = JSON.parse(reader.result!.toString());
        console.log(conteudoArquivoJson)
        let tabs = Array.from<ITab>(conteudoArquivoJson)
        this.limpar();
        tabs.map(item => {
          this.add(item)
        })
      };
      reader.readAsText(event.target.files[0], 'utf-8');
    }
    catch (exception) {
      alert("Consegui ler essa bagaça não. Rodou o teste?")
    }
  }

 public add(tab: ITab) {
    this.tabs.push(tab);
  }

  public limpar(){
    this.tabs.length = 0
  }
}
