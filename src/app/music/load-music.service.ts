import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadMusicService {

  constructor(private http: HttpClient) { }

  public getMusic(): Observable<any> {
    return this.http.get('../assets/data/data.json');
}
}
