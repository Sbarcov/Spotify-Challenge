import { Component} from '@angular/core';
import { Router, RouterModule} from '@angular/router';

import { UserdataService } from '../../services/userdata.service';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { loginRequest } from '../../models/loginRequest';
import { loginResponse } from '../../models/loginResponse';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private service: UserdataService, private router: Router){}

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    });

    onSubmit():void {

      const credentials: loginRequest = {
        username: this.profileForm.value.username!.toString(),
        password: this.profileForm.value.password!.toString()
      };
  
      this.service.register(credentials)
        .subscribe((res: loginResponse) => {
          this.redirect();
        });
      }
  
      redirect(): void{
          this.router.navigate(['/land-page'])
      }

}
