import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../module/user';
import { UserService } from '../../service/user-service.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  users: User[];
  selectedUser: User;
  message: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    console.log("init...");
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  delete(){
    console.log("Component press delete");
    this.userService.delete(this.selectedUser.id)
      .subscribe(result => this.gotoUserList());
  }

  RowSelected(u:any){
    console.log(u);
    this.selectedUser = u;
    console.log("Selected User: " + this.selectedUser.name);
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
