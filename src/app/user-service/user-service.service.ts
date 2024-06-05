import { Injectable } from '@angular/core';
import { User } from '../templates/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {

  userList: Array<User>;

  constructor(private http: HttpClient, private router:Router) {
    this.userList = this.getUserList();

  }

  getUserList() {
    this.http.get<Array<User>>('http://localhost:8080/user/list').subscribe(
      fetchedList =>
      this.userList = fetchedList
    );
    return this.userList;
  }

  saveUser(user: User) {
    this.http.post<User>('http://localhost:8080/user/save', user).subscribe(
      user=> this.router.navigate(['/users'])
    );
  }


}
