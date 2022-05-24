import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
// @Input() handleSubmit: EventEmitter<any>
  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 1,
      name: 'datnt',
      age: 20,
      email: 'ahihi',
      phone: '00000'
    },
    {
      id: 2,
      name: 'datlt',
      age: 21,
      email: 'ahihi',
      phone: '00000'
    },
  ];
  formValue ={
    id: 0,
    name: '',
    age: 0,
    email: '',
    phone: ''
  }
  onAddUser(newUser: any){
    console.log(newUser);
  }
  onEdit(userId: number){
    const editUser = this.users.find(user=>user.id === userId)
    if(editUser){
      this.formValue = {...editUser};
    }
  }
}
