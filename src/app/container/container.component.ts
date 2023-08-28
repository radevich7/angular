import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(RoomsComponent) rooms!: RoomsComponent;

  constructor() {}
  ngAfterContentInit(): void {
    // this.rooms.numberRooms = 12;
  }

  ngOnInit(): void {}
}
