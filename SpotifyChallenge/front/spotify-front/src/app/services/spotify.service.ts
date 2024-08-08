import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) { }

  searchTrack(trackName: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    const params = {
      q: trackName,
      type: 'track',
      limit: 1
    };

    return this.http.get(`${this.apiUrl}/search`, { headers: headers, params: params });
  }
}