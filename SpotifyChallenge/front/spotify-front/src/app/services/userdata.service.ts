import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginRequest } from '../models/loginRequest';
import { loginResponse } from '../models/loginResponse';
import { track } from '../models/track';
import { spotifyToken } from '../models/spotifyToken';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(credentials: loginRequest): Observable<loginResponse> {
    return this.http.post<loginResponse>(`${this.apiUrl}/login`, credentials);
  }

  register(credentials: loginRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/users/register`, credentials);
  }

  getSpotifyAuth(token: string): Observable<spotifyToken>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<spotifyToken>(`${this.apiUrl}/api/spotify/gettoken`, httpOptions);
  }

  getTracks(token: string, username: string): Observable<track[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<track[]>(`${this.apiUrl}/api/tracks/${username}`, httpOptions);
  }

  saveTrack(token: string, username: string, body: track): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.post<any>(`${this.apiUrl}/api/tracks/save/${username}`, body, httpOptions);
  }

  isValid(status: string): boolean{
    return status == "logged";
  }
}
