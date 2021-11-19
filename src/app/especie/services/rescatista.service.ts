import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespEspecie } from '../interfaces/especie.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RescatistaService {
  private apiUrl: string = 'http://localhost:8081/urku/api/rescatista/';

  constructor(private http: HttpClient) {}

  findAll(): Observable<RespEspecie> {
    return this.http.get<RespEspecie>(this.apiUrl);
  }
}
