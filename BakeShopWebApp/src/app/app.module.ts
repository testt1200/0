import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddBakeComponent } from './add-bake/add-bake.component';
import { EditBakeComponent } from './edit-bake/edit-bake.component';
import { BakeComponent } from './bake/bake.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BakeService } from './core/bake.service';

@NgModule({
  declarations: [
    AppComponent,
    BakeComponent,
    AddBakeComponent,
    EditBakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
