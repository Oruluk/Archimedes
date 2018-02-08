import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssemblyPlansPage } from './assembly-plans';

@NgModule({
  declarations: [
    AssemblyPlansPage,
  ],
  imports: [
    IonicPageModule.forChild(AssemblyPlansPage),
  ],
})
export class AssemblyPlansPageModule {}
