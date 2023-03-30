import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','Spring Boot','Java'];
  constructor(private fb:FormBuilder){}

  registerForrm=this.fb.group(
    {
      username:['Arun'],
      Password:["hello"],
      confirmpassword:["hello"],
      Address: this.fb.group({
      city: ["korutla"],
      State: [''],  
      postalcode:['']
      })
    })
  
  // registerForrm=new FormGroup({
  //   username:new FormControl("Kishor"),
  //   Password:new FormControl("hello"),
  //   confirmpassword:new FormControl("hello"),
  //   Address: new FormGroup({
  //     city: new FormControl("korutla"),
  //     State: new FormControl(''),
  //     postalcode: new FormControl('')
  //   })
  // });



  onload(){
    // this.registerForrm.setValue( //it use to set all the fields in the form group, if not it rais an error
    //   {
    //     username:"Pavan Kalayan",
    //     Password:"hello",
    //     confirmpassword:"hello",
    //     Address:{
    //       city:"Korutla",
    //       State:"Telangana",
    //       postalcode:"500083"
    //     }
    //   }
    // )
    this.registerForrm.patchValue( //This helps in loading only specified fields in the form group
    {
      username:"Pavan Kalayan",
      Password:"",
      confirmpassword:"",
      Address:{
        city:"Korutla",
        State:"Telangana",
      }
    }
  )
  }
}
