import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {

  constructor(private http: HttpClient) {

  }

  public fatchImages() {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(environment.apiUri + 'getImageNames', { headers: headers })
      .map(
      (response: Response) => {
          return response;
      }
      )
      .catch(
      (error: Response) => {
          return Observable.throw(error);
      }
      );
    }
}
