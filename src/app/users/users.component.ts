import { Component, OnInit } from '@angular/core';
import { UsersService } from './users-service/users.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UsersService) {}
  usersList: User[] = [];
  selectedUser: any;
  ngOnInit(): void {
    this.userService.getUsers$.subscribe(
      (data) => {
        this.usersList = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  // usersCount$ = this.userService.getUsers$.pipe(map((users) => users.length));

  selectUser(user: any) {
    this.selectedUser = user;
  }

  addUser() {
    let user: User = {
      id: 7,
      name: 'Julian Radevych',
      email: 'radevich7@gmail.com',
      phone: '403-307-7577',
    };

    this.userService.postUsers(user).subscribe({
      next: (data) => {
        this.usersList = [...this.usersList, data];
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  handleUpdateUser(updatedUser: User) {
    // Process the updated user data received from the child component
    let temp: User = { ...updatedUser, name: 'Julian' };
    this.userService.putUsers(temp).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
    console.log('Updated user:', updatedUser);
    // Update the usersList or perform any necessary actions
  }
}
