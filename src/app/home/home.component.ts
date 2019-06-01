import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleo } from 'src/app/shared/models/empleo';
import { EmpleosService } from 'src/app/store/empleos.service';
@Component({
  selector: 'iso-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empleos$: Observable<Empleo[]>;

  constructor(private empleosService: EmpleosService) { }

  ngOnInit(): void {
    this.empleos$ = this.empleosService.getEmpleo();
  }

}
