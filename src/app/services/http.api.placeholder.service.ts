import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPlaceholder } from '../interfaces/placeholder.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpApiPlaceholderClient {

  constructor(private http: HttpClient){

  }
  httpOptions : Object = {
      headers: new HttpHeaders({
        'Content-Type':  'text/plain; charset=utf-8',
        'ApiKey': environment.envVar.apiKey
      }),

  };

  processText(text: string) : Observable<any> {
    return this.http.post(`${environment.envVar.baseUrl}/placeholder`, text, {...this.httpOptions, responseType: 'text'});
  }

  getPlaceholder() : Observable<IPlaceholder[]> {
    return this.http.get<IPlaceholder[]>(`${environment.envVar.baseUrl}/placeholder`, this.httpOptions);
  }

  processTextV2(text: string, paramsUrl: string) : Observable<any> {
    return this.http.post(`${environment.envVar.baseUrl}/v2/placeholder?${paramsUrl}`, text, {...this.httpOptions, responseType: 'text'});
  }

}
