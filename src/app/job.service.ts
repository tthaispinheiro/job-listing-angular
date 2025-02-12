import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = 'assets/jobs.json'; // Caminho do arquivo JSON

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
