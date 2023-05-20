import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import saveAs from 'file-saver';
import { ICustomPlaceholder, ITab } from 'src/app/interfaces/tab.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {
  @Input() tabs: Array<ITab> = [];
  public customPlaceholders: Array<ICustomPlaceholder> = [];
  public formToRename: boolean;
  public formAdvanced: boolean;

  public form = new FormGroup({
    nameTab: new FormControl(""),
})

  constructor() {
      this.formAdvanced = false
      this.formToRename = false
  }
  ngOnInit(): void {
  }

  excludeTab(tabIndex: number): void{
      this.tabs.splice(tabIndex, 1)
  }


  showFormAdvanced(): void{
     this.formAdvanced = true;
  }
  showFormToRename(): void{
    this.formToRename = true;
 }

 saveNewName(index: number): void{
    this.tabs[index].name = this.nameTab
    this.formToRename = false
    this.form.get('nameTab')?.setValue("")
 }

  addCustomVar(tabIndex: number): void{
    let item = this.tabs[tabIndex].custom
    this.customPlaceholders?.push({key:"example", value:"this is test"})
  }

  saveCustomVar(tabIndex: number): void{
    this.tabs[tabIndex].custom = this.customPlaceholders
    this.closeAdvancedForm()
  }

  removeCustomVar(customVarIndex: number): void{
    this.customPlaceholders.splice(customVarIndex, 1)
    this.closeAdvancedForm()
  }

  closeAdvancedForm(){
    this.formAdvanced = false
  }

  get nameTab (): string {
    return this.form.get('nameTab')?.value ?? ""
  }
}
