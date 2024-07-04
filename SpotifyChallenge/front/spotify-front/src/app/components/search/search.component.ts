import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user';
import { UserdataService } from '../../services/userdata.service';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { track } from '../../models/track';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NavbarComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  user: User = new User();
  currentTrack: track = new track();

  searchQuery: string = '';
  searchResults: any[] = [];
  
  constructor(private service: UserdataService, 
    private router: Router,
    private spotifyService: SpotifyService,
    private store: Store<{user: User}>){

      this.store.select('user').subscribe(user =>{
      this.user = user

    })}

    ngOnInit(): void {
     if(this.service.isValid(this.user.status) == false){
       this.router.navigate(['/land-page']);
      }
    }

    search(): void {
        if (this.searchQuery.trim() === '') {
          return;
        }
    
        this.spotifyService.searchTrack(this.searchQuery, this.user.spotifyAuthToken).subscribe(
          (data: any) => {
            this.searchResults = data.tracks.items;
          });
      }

      save(track: any): void{
            this.currentTrack.name = track.name
            this.currentTrack.spotifyid = track.uri;
            this.currentTrack.imgurl = track.album.images[0].url
            this.currentTrack.artist = track.artists[0].name
            this.currentTrack.album = track.album.name;
          this.redirect();
      }

      redirect():void{
        this.service.saveTrack(this.user.token, this.user.username, this.currentTrack).subscribe(
          (data: any) => {
            console.log(this.currentTrack);
            this.router.navigate(['/favourites']);
          });
      }

}
