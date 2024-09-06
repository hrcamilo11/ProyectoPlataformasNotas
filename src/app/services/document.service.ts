import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Documento {
  _id: string;
  titulo: string;
  descripcion: string;
  materia: string;
  autor: string;
  fecha_subida: string;
  calificacion_promedio: number;
  archivo_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = 'https://retoolapi.dev/T1JTJv/documentos';

  constructor(private http: HttpClient) { }

  getDocumentos(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.apiUrl);
  }
}
