import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  title = 'Hello_World';
  imgUrl="../assets/bb.PNG";


  ngOnInit(): void
{
  // One Way Data Bindings
  this.title = "Hello from BridgeLabz"
}
}
