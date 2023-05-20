import { Component, Input, OnInit } from '@angular/core';
import saveAs from 'file-saver';
import { ITab } from '../interfaces/tab.interface';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input() tabs: Array<ITab> = [];
  constructor() { }

  ngOnInit(): void {
  }

  private downLoadUpdates() {
    let data = JSON.stringify(this.tabs);
    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, "list_documents.json");
  }

  private loadFileByJson(event: any) {
    const reader = new FileReader();
    try {
      reader.onload = (e: any) => {
        let conteudoArquivoJson = JSON.parse(reader.result!.toString());
        console.log(conteudoArquivoJson)
        let tabs = Array.from<ITab>(conteudoArquivoJson)
        this.clear();
        tabs.map(item => {
          this.add(item)
        })
      };
      reader.readAsText(event.target.files[0], 'utf-8');
    }
    catch (exception) {
      alert("Error on load json")
    }
  }

  private add(tab: ITab) {
    this.tabs.push(tab);
  }

  private clear(){
    this.tabs.length = 0
  }

}
