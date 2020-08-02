import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  submit() {
    console.log(this.carForm.value);
  }

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      mark: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      plate: ['', [Validators.required,]],
      price: ['', Validators.required],
      capacity: ['', Validators.required],
    });
  }

}
