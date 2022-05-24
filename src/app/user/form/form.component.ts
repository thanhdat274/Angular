import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() handleSubmit: EventEmitter<any>;
    constructor() {
      this.handleSubmit = new EventEmitter();
    }

  ngOnInit(): void {
  }

  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    phone: ''
  }


  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    this.handleSubmit.emit(userForm.value);

    userForm.resetForm({
      id: 0,
      name: '',
      age: 0,
      email: '',
      phone: ''
    })
  }
}
