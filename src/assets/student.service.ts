import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError, throwError } from 'rxjs';
import { Istudent } from 'src/app/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url: string = "assets/data/students.json"; 

  constructor( private http: HttpClient) { }

  getStudents():Observable<Istudent[]>{
    return this.http.get<Istudent[]>(this.url).pipe(catchError((error) => { return throwError( ()=> new Error(error.message))}));
    ;
  }
}
