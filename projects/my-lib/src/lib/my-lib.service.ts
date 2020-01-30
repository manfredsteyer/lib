import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable()
export class MyLibService {

  id = Math.floor(Math.random() * 1000);

  constructor(private http: HttpClient) { 
    console.debug('Look Ma:', http);
  }
}
