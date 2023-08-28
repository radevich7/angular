import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users-service/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  constructor(private userService: UsersService) {}
  user: User = {
    id: 1,
    name: '',
    email: '',
    phone: '',
  };
  addRoom() {
    this.userService.
  }
  ngOnInit(): void {}
}
