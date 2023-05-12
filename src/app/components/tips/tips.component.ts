import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class DicasComponent implements OnInit {
  public exibirDica : boolean = false;
  constructor() { }
  ngOnInit(): void {
      setTimeout(() => {
      this.exibirDica = true
    }, 300000);
  }
  esconderDica(){
      this.exibirDica = false
  }

}
