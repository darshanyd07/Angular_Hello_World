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
  userName:string="";
  nameError:string="";


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

  
  // To display Hello from BridgeLabz with a user inputted name
  // To display Hello from BridgeLabz with a user inputted name Validation
  onInput($event:any)
  {
    console.log("change event occured!",$event.data);
    const nameRegex=RegExp('[A-Z]{1}[a-z]{2}');
    if(nameRegex.test(this.userName))
    {
      this.nameError="";
     
      return;
    }
    this.nameError="Name Is Incorrect";
  }
}
