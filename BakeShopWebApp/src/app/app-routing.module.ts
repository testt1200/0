import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBakeComponent} from "./add-bake/add-bake.component";
import {BakeComponent} from "./bake/bake.component";
import {EditBakeComponent} from "./edit-bake/edit-bake.component";

const routes: Routes = 
[
  { path: 'add-bake', component: AddBakeComponent },
  { path: 'bake', component: BakeComponent },
  { path: 'edit-bake', component: EditBakeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 