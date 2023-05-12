import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.scss']
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
