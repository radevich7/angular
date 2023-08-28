import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { ContainerComponent } from './container/container.component';
import {
  APP_CONFIG,
  APP_SERVICE_CONFIG,
} from '../../src/app_config/app_config.service';
import { UsersComponent } from './users/users.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { PhotosComponent } from './photos/photos.component';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { FormsModule } from '@angular/forms';
import { UserAddComponent } from './users/user-add/user-add.component';

function initFactory(initService: InitService) {
  return () => initService.initApp();
}
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    ContainerComponent,
    UsersComponent,
    UserComponent,
    PhotosComponent,
    UsersDetailsComponent,
    UserAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
    { provide: RequestInterceptor, useClass: RequestInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
