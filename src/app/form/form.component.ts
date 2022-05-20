import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    phone: ''
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
  ]

  onSubmit(userForm:NgForm){
    // console.log(formData);
    const newUsers= this.users
    .map(user=>user.id)
    .sort((a:number, b:number)=>b-a)

    const maxId= newUsers[0]
    if(userForm.value.id===0){
      this.users.push({
        ...userForm.value,
        id:maxId+1
      })
    }else{
      this.inputValues=({
        ...userForm.value,
        id:this.inputValues.id
      })
    }
    userForm.resetForm({
      id:0,
      name:'',
      age:0,
      email:'',
      phone: ''
    })
  }
  update(user:any, id:number){
    this.inputValues= user.find((item:any)=>item.id === id)
  }
  remove(id: number) {
    console.log(id);
    this.users = this.users.filter((user: any) => user.id !== id)
  }
}
