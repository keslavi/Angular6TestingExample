import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor(private http:HttpClient) { }

  get() {
  	return this.http.get('/api/');
  }
}
