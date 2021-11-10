import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource1Account } from './data-source-1-account';

@Injectable({
  providedIn: 'root'
})
export class DataSource1AccountService {
  public getData(tableName: string): Observable<any[]> {
    return of(DataSource1Account[tableName]);
  }
}
