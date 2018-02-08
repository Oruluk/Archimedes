import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assembly-plans',
  templateUrl: 'assembly-plans.html',
})
export class AssemblyPlansPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssemblyPlansPage');
  }

  goWorkPlan(){
    this.navCtrl.push("WorkPlanPage");
  }

}
