import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      img: 'assets/tree.jpeg',
      content: 'Saw this awesome tree riding my bike today!'
    },
    {
      title: 'Snow Mountain',
      username: 'mountainlover',
      img: 'assets/mountain.jpeg',
      content: 'Checkout my snowy mountain picture.'
    },
    {
      title: 'Mountain Biking',
      username: 'biking1222',
      img: 'assets/biking.jpeg',
      content: 'I did some biking today'
    },
  ]
}
