import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs';

export interface SearchResult {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

interface Query {
  batchcomplete: string;
  continue: any;
  query: {
    searchinfo: any;
    search: SearchResult[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http
      .get<Query>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
