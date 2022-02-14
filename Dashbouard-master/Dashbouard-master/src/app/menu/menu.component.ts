import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  admin: any;
  adminConnect: any
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
  }

  logout(){
    localStorage.removeItem('userData');
    localStorage.clear();
    this.router.navigateByUrl('');
  }

}
