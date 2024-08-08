import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { UserdataService } from '../../services/userdata.service';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { loginRequest } from '../../models/loginRequest';
import { loginResponse } from '../../models/loginResponse';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private service: UserdataService, private router: Router) { }

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  async onSubmit() {

    const credentials: loginRequest = {
      username: this.profileForm.value.username!.toString(),
      password: this.profileForm.value.password!.toString()
    };

    await firstValueFrom(this.service.register(credentials))
    .then(value =>{
      alert("Usuario creado exitosamente, por favor inicie sesion");
      this.router.navigate(['/land-page'])
    })
    .catch(error =>{
      alert("El usuario ya existe");
    })
  }


}
