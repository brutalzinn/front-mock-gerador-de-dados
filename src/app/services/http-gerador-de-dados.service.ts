import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPlaceholder } from '../interfaces/placeholder.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpGeradorDeDadosService {

  constructor(private http: HttpClient){

  }
  httpOptions : Object = {
      headers: new HttpHeaders({
        'Content-Type':  'text/plain; charset=utf-8',
        'ApiKey': environment.envVar.apiKey
      }),

  };


  processarTexto(text: string) : Observable<any> {
    return this.http.post(`${environment.envVar.baseUrl}/placeholder`, text, {...this.httpOptions, responseType: 'text'});
  }

  obterPlaceholder() : Observable<IPlaceholder[]> {
    return this.http.get<IPlaceholder[]>(`${environment.envVar.baseUrl}/placeholder`, this.httpOptions);
  }
}
