import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted = false;
  isFail = false;
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  submit(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    this.authService.login(email, password).then(isLoggedIn => {
      this.isSubmitted = true;
      // success => navigate to returnUrl
      if (isLoggedIn) {
        const returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
        this.router.navigate([returnUrl || '/']);
      } else {
        this.isFail = true;
      }
    });
  }
}
