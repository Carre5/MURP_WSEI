import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {
  driverForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  submit() {
    console.log(this.driverForm.value);
  }

  ngOnInit(): void {
    this.driverForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      licence: ['', Validators.required],
    });
  }

}
