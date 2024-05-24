import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root'
})

export class EmpresaService {
  private apiURL = "http://127.0.0.1/api/v1/empresas";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(Empresa:Empresa): Observable<any> {
    return this.httpClient.post(this.apiURL, JSON.stringify(Empresa), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, Empresa:Empresa): Observable<any> {
    return this.httpClient.put(this.apiURL + '/' + id, JSON.stringify(Empresa), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}