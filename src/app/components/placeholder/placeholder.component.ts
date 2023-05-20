import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { IPlaceholder } from 'src/app/interfaces/placeholder.interface';
import { HttpApiPlaceholderClient } from 'src/app/services/http.api.placeholder.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {

  public placeholdersList : IPlaceholder[];
  displayStyle = "none";

  constructor(private httpApiPlaceholderClient: HttpApiPlaceholderClient){
    this.placeholdersList = []
  }

  ngOnInit(): void {
    this.httpApiPlaceholderClient.getPlaceholder().subscribe(response =>{
        this.placeholdersList = response
    })
  }


  open() {
    this.displayStyle = "block";
  }
  close() {
    this.displayStyle = "none";
  }

   copyToTransferData(chave: any)
  {
    let placeholder = `[${chave}]`
    navigator.clipboard.writeText(placeholder).then(function () {
      console.log("Copiada para a área de transferência", chave);
    }, function (err) {
      console.log("Ocorreu um erro ao copiar", chave);
    });
    this.notifyData(chave)
  }

  notifyData(chave: string){
  let classeAlerta: string = `#alert-${chave}`
    $(classeAlerta).fadeIn();
    setTimeout(function () {
      $(classeAlerta).fadeOut(1000);
    }, 1300);
  }


}
