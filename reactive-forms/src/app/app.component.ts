import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','Spring Boot','Java'];
  registerForrm=new FormGroup({
    username:new FormControl("Kishor"),
    Password:new FormControl("hello"),
    confirmpassword:new FormControl("hello"),
    Address: new FormGroup({
      city: new FormControl("korutla"),
      State: new FormControl(''),
      postalcode: new FormControl('')
    })
  });
}
