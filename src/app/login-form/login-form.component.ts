import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

declare var $:any;
var isOn:boolean=false;
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private _userservice:UserServiceService) { }
 
  //  LoginFormComponent = false;
  // loadFormComponent(){
  //      this.LoginFormComponent = true;
    // }

  ngOnInit() {
    $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });
  }

  //show email id ang password on console after login button click event
  loginUser(e)
  {
    e.preventDefault();
    console.log(e);
var email=e.target.elements[0].value;
var password=e.target.elements[1].value;
console.log(email,password);
return false;

//user authontication (email and password checking to show dasboard after successfull login)
if(email=='admin@gmail.com' && password=='admin')
{
  //service is menatianed the state to checked is user is logged in or not?
  this._userservice.setUserLoggedIn();
  this.router.navigate(['adminDashboard']);
}
}
}
