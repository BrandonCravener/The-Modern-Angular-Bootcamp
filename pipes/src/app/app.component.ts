import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0.0; 
  height: number = 0.0; 
  miles: number = 0.0;


  car = {
    make: 'Tesla',
    model: 'Model 3',
    year: 2018
  }

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange(event:Event) {
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event:Event) {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
  }

  onHeightChange(event:Event) {
    this.height = parseFloat((event.target as HTMLInputElement).value);
  }

  onMilesChange(event:Event) {
    this.miles = parseFloat((event.target as HTMLInputElement).value);
  }

}
