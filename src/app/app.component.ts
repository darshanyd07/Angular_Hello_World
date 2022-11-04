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
  url = "https://www.bridgelabz.com/";


  ngOnInit(): void
{
  // One Way Data Bindings
  this.title = "Hello from BridgeLabz"
}
// on clicking BridgeLabz Logo
onClick($event: any)
  {
    console.log("Save Button Is Clicked!", $event);
    window.open(this.url, "_blank");
  }
}
