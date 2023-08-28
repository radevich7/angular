import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Room, RoomList } from './room';
import { RoomsService } from './rooms-service/rooms.service';
import { APP_SERVICE_CONFIG } from '../../../src/app_config/app_config.service';
import { AppConfig } from '../../../src/app_config/app_config.interface';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton';
  numberRooms = 10;
  hideRooms = false;
  room: Room = {
    availableRooms: 10,
    totalRooms: 20,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];
  selectedRoom!: RoomList;
  title: string = 'This is the parent title';

  constructor(
    roomServise: RoomsService,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {
 
    this.roomList = roomServise.getRooms();
  }

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Title has changed';
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const newroom: RoomList = {
      roomNumber: 4,
      roomType: 'Special',
      amenities: 'AC',
      price: 250,
      photos: 'image1',
      checkInTime: new Date('19-Nov-2022'),
      checkOutTime: new Date('27-Nov-2022'),
    };
    this.roomList = [...this.roomList, newroom];
  }
}
