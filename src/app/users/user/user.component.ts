import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users-service/users.service';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: any;
  @Output() updateUser = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  emitUpdateUser() {
    this.updateUser.emit(this.user);
  }
}
