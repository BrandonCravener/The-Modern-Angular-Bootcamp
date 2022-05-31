import { Component } from '@angular/core';
import { SearchResult, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  pages: SearchResult[] = [];

  constructor(private wikipediaService: WikipediaService) {}

  onTerm(term: string) {
    this.wikipediaService.search(term).subscribe((response) => {
      this.pages = response;
    });
  }
}
