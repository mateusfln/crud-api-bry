import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

     

import {  Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

  

import { Funcionario } from './funcionario';

  

@Injectable({

  providedIn: 'root'

})

export class FuncionarioService {

  private apiURL = "https://jsonplaceholder.typicode.com";

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json'

    })

  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/Funcionarios/')

    .pipe(
      catchError(this.errorHandler)
    )

  }

  create(Funcionario:Funcionario): Observable<any> {

    return this.httpClient.post(this.apiURL + '/Funcionarios/', JSON.stringify(Funcionario), this.httpOptions)

    .pipe(

      catchError(this.errorHandler)

    )

  }  

  find(id:number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/funcionarios/' + id)

    .pipe(
      catchError(this.errorHandler)
    )

  }

  update(id:number, Funcionario:Funcionario): Observable<any> {

    return this.httpClient.put(this.apiURL + '/funcionarios/' + id, JSON.stringify(Funcionario), this.httpOptions)

    .pipe( 
      catchError(this.errorHandler)
    )

  }

  delete(id:number){

    return this.httpClient.delete(this.apiURL + '/Funcionarios/' + id, this.httpOptions)

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