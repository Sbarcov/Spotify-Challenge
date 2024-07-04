import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user';
import { UserdataService } from '../../services/userdata.service';
import { track } from '../../models/track';


@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent implements OnInit {

  user: User = new User();
  tracks: track[] = [];


  
  constructor(private userService: UserdataService, private router: Router, private store: Store<{user: User}>){

      this.store.select('user').subscribe(user =>{
      this.user = user

    })}

    ngOnInit(): void {
     if(this.userService.isValid(this.user.status) == false){
      this.router.navigate(['/land-page']);
     }
      this.userService.getTracks(this.user.token, this.user.username).subscribe(res => {
        this.tracks = res
      });
    }

}
