import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private userData: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      ID: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const ID = this.loginForm.controls.ID.value;
    const password = this.loginForm.controls.password.value;
    this.userData.login(ID, password).then(function() {
      console.log(this.userData.getUser());
      this.router.navigate(['/subjects']);
    }.bind(this));
  }
}

