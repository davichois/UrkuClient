import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespEspecie } from '../interfaces/especie.interface';

@Injectable({
  providedIn: 'root',
})
export class ClasificacionService {
  private apiUrl: string = 'http://localhost:8081/urku/api/clasificacion/';

  constructor(private http: HttpClient) {}

  findAll(): Observable<RespEspecie> {
    return this.http.get<RespEspecie>(this.apiUrl);
  }
}
