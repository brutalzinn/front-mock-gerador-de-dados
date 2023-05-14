import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class DicasComponent implements OnInit {
  public showTips : boolean = false;
  constructor() { }
  ngOnInit(): void {
      setTimeout(() => {
      this.showTips = true
    }, environment.envVar.tipsTime);
  }
  hide(){
      this.showTips = false
  }
}
