import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'user-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  ngOnInit(): void {
      this.listUser()
  }

  listUsers: User[] = []

  constructor(
    private userService: UserService
  ){}

  listUser(){
    this.userService.listClient()
      .subscribe(
        res => {
          console.log(res);

          this.listUsers = res
        },
        err => {
          console.log(err);

        }
      )
  }

}
