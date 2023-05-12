import { Component, OnInit } from '@angular/core';
import { HttpGeradorDeDadosService } from '../services/http-gerador-de-dados.service';
import { IPlaceholder } from '../interfaces/placeholder.interface';
import $ from 'jquery';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {

  public placeholdersList : IPlaceholder[];
  displayStyle = "none";

  constructor(private httpGeradorDeDadosService: HttpGeradorDeDadosService){
    this.placeholdersList = []
  }

  ngOnInit(): void {
    this.httpGeradorDeDadosService.obterPlaceholder().subscribe(response =>{
        this.placeholdersList = response
    })
  }


  open() {
    this.displayStyle = "block";
  }
  close() {
    this.displayStyle = "none";
  }

   copiarDadoAreaTransferencia(chave: any)
  {
    let placeholder = `[${chave}]`
    navigator.clipboard.writeText(placeholder).then(function () {
      console.log("Copiada para a área de transferência", chave);
    }, function (err) {
      console.log("Ocorreu um erro ao copiar", chave);
    });
    this.notificarDado(chave)
  }

  notificarDado(chave: string){
  let classeAlerta: string = `#alert-${chave}`
    $(classeAlerta).fadeIn();
    setTimeout(function () {
      $(classeAlerta).fadeOut(1000);
    }, 1300);
  }


}
