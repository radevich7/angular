import { Injectable } from '@angular/core';
import { RoomList } from '../room';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {}

  getRooms(): RoomList[] {
    return [
      {
        roomNumber: 1,
        roomType: 'Deluxe',
        amenities: 'AC',
        price: 500,
        photos: 'image1',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('12-Nov-2022'),
      },
      {
        roomNumber: 2,
        roomType: 'Extra Deluxe',
        amenities: 'AC,TV',
        price: 700,
        photos: 'image2',
        checkInTime: new Date('14-Nov-2022'),
        checkOutTime: new Date('16-Nov-2022'),
      },
      {
        roomNumber: 3,
        roomType: 'Bomg',
        amenities: 'NA',
        price: 400,
        photos: 'image3',
        checkInTime: new Date('19-Nov-2022'),
        checkOutTime: new Date('22-Nov-2022'),
      },
    ];
  }
}
