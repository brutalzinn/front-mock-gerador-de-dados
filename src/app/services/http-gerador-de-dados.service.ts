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
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'ApiKey': environment.envVar.apiKey
  })
  };

  processarTexto(text: string) : Observable<string> {
    return this.http.post<string>(`${environment.envVar.baseUrl}/placeholder`, this.httpOptions);
  }

  obterPlaceholder() : Observable<IPlaceholder[]> {
    return this.http.get<IPlaceholder[]>(`${environment.envVar.baseUrl}/placeholder`, this.httpOptions);
  }
}
