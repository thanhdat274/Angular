import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  champs = [
    {
      name: "Garen",
      dame: 5000,
      defend: 300,
      speed: 250,
      price: 5000,
      avatar: "https://picsum.photos/100"
    }
  ]
  studentName = 'datnt';
  studentMssv = 'PH13533'
  showStatus = true;
  onClickBtn() {
    console.log("ahihii");
    this.showStatus = !this.showStatus
  }

  inputValue = {
    name: '',
    avatar: '',
    dame: '',
    speed: '',
    defend: '',
    price: ''
  }
  onInput(event: any, key: 'name' | 'avatar' | 'dame' | 'speed' | 'defend' | 'price') {
    this.inputValue[key] = event.target.value;
  }
  onSubmit() {
    console.log('Giá trị obj các ô input', this.inputValue);
    this.champs.push(
      {...this.inputValue,
        dame: +this.inputValue.dame,
        speed: +this.inputValue.speed,
        defend: +this.inputValue.defend,
        price: +this.inputValue.price
      });
      this.inputValue = {
        name: '',
        avatar: '',
        dame: '',
        speed: '',
        defend: '',
        price: ''
      }
  }
}
