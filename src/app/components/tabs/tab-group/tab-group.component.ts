import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITab } from '../../../interfaces/tab.interface';
import { timeout, timer } from 'rxjs';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {

  public formToRename: boolean;
  public tabs: Array<ITab> = [];
  public form: FormGroup;
  constructor() {
      this.form = new FormGroup({
          nameTab: new FormControl("")
      })
      this.tabs = []
      this.formToRename = false
  }

  ngOnInit(): void {
      this.addTab("", true)
  }

  addTab(nameTab: string, visivel: boolean = false): void {
    if(nameTab === ""){
      nameTab = "Nova aba " + this.tabs.length
    }
    let tab : ITab = {
      name: nameTab,
      visivel: visivel
    }
    this.tabs = [...this.tabs, tab]
  }

  showTab(index: number): void{
    for(let i = 0; i < this.tabs.length; i++){
          this.tabs[i].visivel = false
    }
      this.tabs[index].visivel = true
  }

  excludeTab(index: number): void{
      this.tabs.splice(index, 1)
  }

  showFormToRename(index: number): void{
     this.formToRename = true;
  }

  saveNewName(index: number): void{
     this.tabs[index].name = this.nameTab
     this.formToRename = false
     this.form.get('nameTab')?.setValue("")
  }

    get nameTab (): string {
    return this.form.get('nameTab')?.value
  }
}
