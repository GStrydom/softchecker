import { Component, OnInit } from '@angular/core';
// import { AuthData } from "../auth-data.model";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
        ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
        ]
      ]
    });
  }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    let email = this.registerForm.value['email']
    let password = this.registerForm.value['password']
    this.authService.registerUser(email, password).then();
    this.registerForm.reset();
  }
}
