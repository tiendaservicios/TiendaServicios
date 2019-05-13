import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleo } from 'src/app/shared/models/empleo';
import { EmpleosService } from './store/empleos.service';

@Component({
  selector: 'iso-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  empleos$: Observable<Empleo[]>;
  

  constructor(private empleosService: EmpleosService) { }

  ngOnInit(): void {
    this.empleos$ = this.empleosService.getEmpleo();
    
    
  }
}
