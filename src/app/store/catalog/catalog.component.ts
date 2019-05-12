import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleo } from 'src/app/shared/models/empleo';
import { EmpleosService } from '../empleos.service';

@Component({
  selector: 'iso-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  empleos$: Observable<Empleo[]>;
  

  constructor(private empleosService: EmpleosService) { }

  ngOnInit(): void {
    this.empleos$ = this.empleosService.getEmpleo();
    
    
  }

}
