import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BakeService} from "../core/bake.service";

@Component({
  selector: 'app-add-bake',
  templateUrl: './add-bake.component.html',
  styleUrls: ['./add-bake.component.css']
})
export class AddBakeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private bakeService: BakeService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      bakeName: ['', Validators.required],
      bakePrice: ['', Validators.required]
    });

  }

  onSubmit() {
    this.bakeService.createBake(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['bake']);
      });
  }

}