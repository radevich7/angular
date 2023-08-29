import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'add-user', component: UserAddComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users/:id', component: UsersDetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
