import { Component} from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { Store } from '@ngrx/store';
import { UserdataService } from '../../services/userdata.service';
import { logIn } from '../../store/user.actions';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { loginRequest } from '../../models/loginRequest';
import { loginResponse } from '../../models/loginResponse';
import { spotifyToken } from '../../models/spotifyToken';


@Component({
  selector: 'app-land-page',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
})
export class LandPageComponent {

  user: User = new User();

  //username!: string;
  //password!: string;

  constructor(private service: UserdataService, private router: Router, private store: Store<{user: User}>){}


    profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    });
  

  onSubmit():void {

    const credentials: loginRequest = {
      username: this.profileForm.value.username!.toString(),
      password: this.profileForm.value.password!.toString()
    };

    this.service.login(credentials)
      .subscribe((res: loginResponse) => {
        this.user.token = res.token;
        this.user.username = res.username;
        this.user.status = 'logged';
        this.redirect();
      });
    }

    redirect(): void{
      this.service.getSpotifyAuth(this.user.token)
      .subscribe((res: spotifyToken) => {
        this.user.spotifyAuthToken = res.token;
        this.store.dispatch(logIn(this.user));
        sessionStorage.setItem('user', JSON.stringify(this.user))
        this.router.navigate(['/search'])
      });
    }
  }
