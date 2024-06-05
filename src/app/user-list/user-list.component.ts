import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { User } from '../templates/user';
import { CommonModule } from '@angular/common';

import { UserServiceService } from '../user-service/user-service.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {

  userService = inject(UserServiceService);

  @Input() title = '';

  @Output() addUserEvent = new EventEmitter<string>();


  userList: User[];
  constructor(private router: Router) {
    this.title = 'User List';
    this.userList = this.userService.getUserList();
  }

  addNewUser() {
    alert('Here');
    this.router.navigateByUrl('addEditUser')
  }



  ngOnInit() {}
}
