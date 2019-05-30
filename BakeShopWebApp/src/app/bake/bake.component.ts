import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Bake} from "../model/bake.model";
import {BakeService} from "../core/bake.service";

@Component({
  selector: 'app-bake',
  templateUrl: './bake.component.html',
  styleUrls: ['./bake.component.css']
})
export class BakeComponent implements OnInit {

  bakes: Bake[];

  constructor(private router: Router, private bakeService: BakeService) { 
    
  }

  ngOnInit() {
    this.bakeService.getAllBakes()
      .subscribe( data => {
          this.bakes = data.result;
      });
  }

  deleteBake(bake: Bake): void {
    this.bakeService.deleteBake(bake.id)
      .subscribe( data => {
        this.bakes = this.bakes.filter(u => u !== bake);
      })
  };

  editBake(bake: Bake): void {
    window.localStorage.removeItem("editBakeId");
    window.localStorage.setItem("editBakeId", bake.id.toString());
    this.router.navigate(['edit-bake']);
  };

  addBake(): void {
    this.router.navigate(['add-bake']);
  };
}