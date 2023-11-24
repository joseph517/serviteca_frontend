import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nameUser: string = ''

  ngOnInit(): void {
    this.nameUser = localStorage.getItem('name')!
  }

  constructor(
    private router: Router
  ){}

  logout(){
    localStorage.clear()
    // localStorage.removeItem('acces_token')
    // localStorage.removeItem('user_id')

    this.router.navigate(['/'])
  }

}
