import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users-service/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  constructor(private userService: UsersService) {}
  successMessage: string = '';
  user: User = {
    id: 1,
    name: '',
    email: '',
    phone: '',
  };
  addUser(form: NgForm) {
    this.userService.postUsers(this.user).subscribe((data) => {
      this.successMessage = 'User Added';
      form.reset();
    });
  }
  ngOnInit(): void {}
}
