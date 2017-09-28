import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attended',
  templateUrl: './attended.component.html',
  styleUrls: ['./attended.component.css']
})
export class AttendedComponent implements OnInit {
  router: any;
  attended: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
      this.router.navigate(['/subjects']);
  }
}
