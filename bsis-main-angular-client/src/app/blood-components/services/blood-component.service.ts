import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BloodComponent} from '../models/blood-component.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodComponentService {
  private http: HttpClient = inject(HttpClient);
  private apiUrl: string = `${environment.apiUrl}/blood-components`;

  getBloodComponents(page = 1, size = 10, filter = {query: "", order: 'asc'}): Observable<{
    bloodComponents: BloodComponent[],
    page: number,
    totalCount: number
  }> {
    return this.http.get<{ bloodComponents: BloodComponent[], page: number, totalCount: number }>(this.apiUrl)
  }

  getBloodComponent() {
    return this.http.get(this.apiUrl)
  }

}
