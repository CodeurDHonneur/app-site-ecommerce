import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: ''
  }

  constructor(private router: Router){
   
  }

  onLogin(){
    if(this.loginObj.userName == "Admin" && this.loginObj.password == "azerty123"){
      this.router.navigateByUrl('/products')
    } else {
     alert('Désolé, vous ne pouvez pas vous connecter')
    }
   }
}
