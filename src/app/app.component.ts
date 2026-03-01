import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from 'src/assets/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observableProject';
  
  public students: any[] = [];
  public errorMsg: any;
  constructor(private _studentService : StudentService ) {

   }

  ngOnInit() {
    this._studentService.getStudents().
    subscribe({next: data => this.students = data,
      error: error => this.errorMsg = error,
      complete: () => console.log('Completed')
      
    } )
    console.log(this.students);
  }
}
