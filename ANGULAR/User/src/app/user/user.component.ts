import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../models/user.class';
import { matchRegexEmail, matchRegexPassword } from '../utils/regex';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  email: FormControl = new FormControl('');
  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  address: FormControl = new FormControl('');

  user!: User;
  errorMessage!: string;

  isSubscribe: boolean = false;
  isSubmit: boolean = false;

  isEmail!: boolean;
  isUsername!: boolean;
  isPassword!: boolean;
  isAddress!: boolean;

  onSubmit() {

    this.isSubmit = true;
    this.isEmail = matchRegexEmail(this.email.value);
    this.isPassword = matchRegexPassword(this.password.value);

    this.username.value.length > 2
      ? (this.isUsername = true)
      : (this.isUsername = false);

    this.address.value.length > 2
      ? (this.isAddress = true)
      : (this.isAddress = false);

    if (this.isEmail && this.isUsername && this.isPassword && this.isAddress) {
      this.isSubscribe = true;

      this.user = new User(
        this.email.value,
        this.username.value,
        this.password.value,
        this.address.value
      );

      console.log('Inscription validée');
    } else {
      this.isSubscribe = false;

      this.errorMessage = 'Formulaire invalide';
      console.log('Inscription non validée');
    }
  }
}
