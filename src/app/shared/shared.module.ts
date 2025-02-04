import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/sidebar.component';



@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent
  ]
})
export class SharedModule { }
