import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-registration',
  templateUrl: './profile-registration.component.html',
  styleUrls: ['./profile-registration.component.css']
})
export class ProfileRegistrationComponent implements OnInit {
  @Input() ngFormGroup: FormGroup;
  constructor() {
    this.ngFormGroup = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      primaryContact: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  ngOnInit() {
  }

}
