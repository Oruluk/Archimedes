import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ChangeDetectorRef } from '@angular/core';

/**
 * Generated class for the WorkPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-plan',
  templateUrl: 'work-plan.html',
})
export class WorkPlanPage {
  wikitudePlugin;
  requiredFeatures = ['ir'];
  counter = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform, private cd: ChangeDetectorRef) {

    plt.ready().then(() => {
      this.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
      //trial license key 
      this.wikitudePlugin._sdkKey = "UeTP9NOygx567LhvQR6JaAer50BXGdAoVhV5SEXOs9o+5F1ookXLdFBGQhs15qrO3suHr3d8piUc5wgzGdj+CjByMEYSwmAJ0z6sbVgUZCWiTmmKbvQN6uUBHKjt6MebncSmamdAQyZlOUP3EL9BWnhZ0lIGPQbf2uQVFtNbYUxTYWx0ZWRfX+EzhW4DK6HYU8X7Xk+SLe2xMzq0XhxcKXlfnIyEzSeimbSqoU6TXkJ051qcKHoCpmPECcfSDGk53S0JyfTUajNRzmIC7K99+bVQKBZB2hzj7SFT90PIoqP6/gTztxMrnumqeMAAF3uzy0XqkiH4ugiaXMjXHb73lBqdiazHIMbg8Ysmnnpbd0VmqWEhLiTfThTmcEw59jxdGGsgz6zqx614HpMFpOFBkugfeWAkzG9C+WkyJuWrYAzdD7zTYftqfmQbuf3lGlocrbC8mOJHH15ZWOXBxONHYMCIfuqArxBRHmK23tNM138I43xDWj+kbByne11DeLAQLBjp1H8/UIdRPtFLGyD30ZG73Hrkpcf/2fOAH2oe1f+f4A/QZVc+ZMvGRna8FBriEyucSPKaK8M/z2mxLMhoua3Q9Qiv03kqooGolielSbqmwORlFudaMoRO8xAtUjmw6ZZg8qk6jwjhPMyLFWQl36I/jdRSTD2F1XuYousEBX8=";
      this.wikitudePlugin.isDeviceSupported(this.onDeviceSupported, this.onDeviceNotSupported, this.requiredFeatures);
    });

  }

  onDeviceSupported = () => {
    console.log('a');
  }

  onDeviceNotSupported = () => {
    console.log('b');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPlanPage');
  }

  startPreview(e) {
    var config:any = {"camera_position": "back"};
    console.log(e);

    if (e == 1){
      this.wikitudePlugin.loadARchitectWorld(
            function(success) {
              console.log("ARchitect World loaded successfully.");
            },
            function(fail) {
              console.log("Failed to load ARchitect World!");
              console.log(fail)
            },
        "www/assets/experience/Step1/index.html",
        ['ir'],
        <JSON>config);
        this.counter = false;
    } else if (e == 2){
      this.wikitudePlugin.loadARchitectWorld(
            function(success) {
              console.log("ARchitect World loaded successfully.");
            },
            function(fail) {
              console.log("Failed to load ARchitect World!");
              console.log(fail)
            },
        "www/assets/experience/Step2/index.html",
        ['ir'],
        <JSON>config);
        this.counter = false;
    } else if (e == 3){
      this.wikitudePlugin.loadARchitectWorld(
            function(success) {
              console.log("ARchitect World loaded successfully.");
            },
            function(fail) {
              console.log("Failed to load ARchitect World!");
              console.log(fail)
            },
        "www/assets/experience/Step3/index.html",
        ['ir'],
        <JSON>config);
        this.counter = false;
    }
  }

  finish() {
    this.navCtrl.push("CompleteAssemblyPage");
  }

}
