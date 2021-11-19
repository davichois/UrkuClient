import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespEspecie, especie } from '../interfaces/especie.interface';

@Injectable({
  providedIn: 'root',
})
export class EspecieService {
  private apiUrl: string = 'http://localhost:8081/urku/api/animal/';

  constructor(private http: HttpClient) {}

  findAll(): Observable<RespEspecie> {
    return this.http.get<RespEspecie>(this.apiUrl);
  }

  save(data: especie): Observable<especie> {
    return this.http.post<especie>(this.apiUrl, data);
  }

  edit(data: especie, id: number): Observable<especie> {
    return this.http.put<especie>(`${this.apiUrl}${id}`, data);
  }

  delete(id: any): Observable<especie> {
    return this.http.delete<especie>(`${this.apiUrl}${id}`);
  }
}
