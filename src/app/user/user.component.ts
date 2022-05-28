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
  formValue = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    phone: ''
  }
  onAddUser(newUser: any) {
    console.log(newUser);

    if (newUser.id === 0) {
      const newUsers = this.users.map(user => user.id).sort((a: number, b: number) => b - a)
      const maxId = newUsers[0]

      return this.users.push({
        ...newUser,
        id: maxId + 1
      });
    }
    // phần chỉnh sửa
     return this.users.forEach((user, index)=>{
       if(user.id === newUser.id){
         this.users[index]=newUser;
       }
     })

  }
  onEdit(userId: number) {
    const editUser = this.users.find(user => user.id === userId)
    if (editUser) {
      this.formValue = { ...editUser };
    }
  }
  onRemove(){

  }
}
