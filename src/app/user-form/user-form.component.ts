import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../templates/user';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service/user-service.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    departmentCode: new FormControl(''),
    hiringDate: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
  });

  onSubmit() {
    var newUser: User;
    newUser = {
      id: "",
      name: this.userForm.value.name!,
      departmentId: this.userForm.value.departmentCode!,
      hiringDate: new Date(this.userForm.value.hiringDate!),
      birthday: new Date(this.userForm.value.birthday!),
      salary: Number(this.userForm.value.salary!),
    };
    this.userService.saveUser(newUser);

  }

  constructor(
    private router: Router,
    private userService: UserServiceService
  ) {}
}
