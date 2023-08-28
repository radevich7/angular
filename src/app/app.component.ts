import {
  Component,
  ViewChild,
  // ViewContainerRef,
  OnInit,
  ElementRef,
  // AfterViewInit,
} from '@angular/core';
import { read } from 'fs';
import { RoomsComponent } from './rooms/rooms.component';
import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('accessDomElement', { static: true }) domEl!: ElementRef;

  ngOnInit(): void {
    // this.domEl.nativeElement.innerText = 'Chaning this text from app';
  }
  constructor(private initService: InitService) {
    console.log(initService.config);
  }
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);

  // }

  // title = 'hotelinventoryapp';
  // role = 'User';

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
}
