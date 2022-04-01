import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ""

  length: number = 0;
  useNumbers: boolean = true;
  useLetters: boolean = true;
  useSymbols: boolean = true;

  onChangeLength(event: Event) {
    const len = parseInt((event.target as HTMLInputElement).value)
    if (!isNaN(len)) {
      this.length = len
    }
  }

  lengthKeyPress(event: KeyboardEvent) {
    if (event.key == "Enter") this.generatePassword() 
  }
  

  generatePassword() {
    const numbers = "1234567890"
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const symbols = "!@#$%^&*()"


    let usableChars = ""
    
    if (this.useNumbers) usableChars += numbers 
    if (this.useLetters) usableChars += letters 
    if (this.useSymbols) usableChars += symbols 

    
    this.password = ""
    
    for (let i = 0; i < this.length; i++) {
      this.password += usableChars.charAt(Math.floor(Math.random() * usableChars.length))  
    }
  } 
}
