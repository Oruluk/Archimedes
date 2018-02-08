import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-complete-assembly',
  templateUrl: 'complete-assembly.html',
})
export class CompleteAssemblyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompleteAssemblyPage');
    setTimeout(()=> {this.navCtrl.push('AssemblyPlansPage')}, 3000)
  }

}
