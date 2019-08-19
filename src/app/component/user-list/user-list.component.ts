import { Component, OnInit } from '@angular/core';
import { User } from '../../module/user';
import { UserService } from '../../service/user-service.service';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  users: User[];
  selectedUser: User;
 
  constructor(private userService: UserService) {
  }
 
  ngOnInit() {
    console.log("init...");
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }


  RowSelected(u:any){
    console.log(u);
    this.selectedUser = u;
  }

}