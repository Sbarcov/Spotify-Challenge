import { Routes } from '@angular/router';
import { LandPageComponent } from './components/land-page/land-page.component';
import { SearchComponent } from './components/search/search.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path: '', component: LandPageComponent},
    {path: 'land-page', component: LandPageComponent},
    {path: 'search', component: SearchComponent},
    {path: 'favourites', component: FavouritesComponent},
    {path: 'register', component: RegisterComponent}
];
