import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ICasa } from '../Property/ICasa.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  GetTodasLasCasas(SellRent: number) : Observable<ICasa[]> {
    return this.http.get('data/Casas.json').pipe(
      map(data => {
        const casasArray: Array<ICasa> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            casasArray.push(data[id]);
          }
        }
        return casasArray;
      }
      )
    );
  }
}
