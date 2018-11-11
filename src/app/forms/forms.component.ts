import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   lastName: new FormControl(''),
  //   age: new FormControl(''),

  // });
    myForm = this.fb.group ({
      name: ['', Validators.required],
      lastName: [''],
      age: ['', Validators.min[18]]
});


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
