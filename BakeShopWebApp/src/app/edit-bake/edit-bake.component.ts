import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Bake} from "../model/bake.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {BakeService} from "../core/bake.service";
@Component({
  selector: 'app-edit-bake',
  templateUrl: './edit-bake.component.html',
  styleUrls: ['./edit-bake.component.css']
})
export class EditBakeComponent implements OnInit {

  bake: Bake;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private bakeService: BakeService) { }

  ngOnInit() {
    let id = window.localStorage.getItem("editBakeId");
    if(!id) {
      alert("Invalid action.")
      this.router.navigate(['bake']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      bakename: ['', Validators.required],
      bakePrice: ['', Validators.required]
    });
    this.bakeService.getBakeById(+id)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.bakeService.updateBake(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Bake updated successfully.');
            this.router.navigate(['bake']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
