import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import saveAs from 'file-saver';
import { ICustomPlaceholder, ITab } from 'src/app/interfaces/tab.interface';

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
  constructor() {
      this.formAdvanced = false
      this.formToRename = false
   }
  ngOnInit(): void {
  }

  excludeTab(tabIndex: number): void{
      this.tabs.splice(tabIndex, 1)
  }

  showFormToRename(tabIndex: number): void{
     this.formToRename = true;
  }

  showFormAdvanced(tabIndex: number): void{
     this.formAdvanced = true;
  }

  saveTabsAdvanced(tabIndex: number): void{
    this.tabs[tabIndex].custom = this.customPlaceholders
    this.closeAdvancedForm()
  }

  addCustomVar(tabIndex: number): void{
    this.customPlaceholders?.push({key:"example", value:"this is test"})
    this.closeAdvancedForm()
  }

  removeCustomVar(customVarIndex: number): void{
    this.customPlaceholders.splice(customVarIndex, 1)
    this.closeAdvancedForm()
  }

  closeAdvancedForm(){
    this.formAdvanced = false
  }
}
