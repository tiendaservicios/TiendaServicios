import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Empleo } from '../shared/models/empleo';

@Injectable({
  providedIn: 'root'
})
export class EmpleosService {

  constructor(private db: AngularFirestore) { }

  getEmpleo(): Observable<Empleo[]> {
    return this.db.collection<Empleo>('empleos').valueChanges();
  }
}
