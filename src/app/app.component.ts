import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = '5';
  totalItems = 0;
  pageEvent: PageEvent;

  constructor(private http: HttpClient) { 
    this.pageEvent = new PageEvent();
  }

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos').subscribe(data => {
  console.log(data);
  this.totalItems = data.length;
}, error => {
  console.log('Error: ', error);
});


  }

  firstInterval() {
    // Logic to go to first interval
  }

  previousInterval() {
    // Logic to go to previous interval
  }

  nextInterval() {
    // Logic to go to next interval
  }

  lastInterval() {
    // Logic to go to last interval
  }
}
