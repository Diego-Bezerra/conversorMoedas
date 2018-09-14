import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { DecimalPipe } from '@angular/common';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-convert-local',
  templateUrl: 'convert-local.html',
})
export class ConvertLocalPage {

  unityValue: number = 0.0062;
  valueReal: number;
  valueLocal: number;
  result1: string;
  result2: string;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private toast: Toast
    , private decimalPipe: DecimalPipe
    , private storage: Storage
    , public loadingCtrl: LoadingController)
    {}

  validate(val: number): boolean {
    return this.unityValue != null && val != null;
  }

  calculate() {
    this.calculate1();
    this.calculate2();
  }

  calculate1() {
    this.result1 = "";
    if (this.validate(this.valueReal)) {
      let res = this.decimalPipe.transform(this.valueReal / this.unityValue, '1.2-2');
      this.result1 = '$ ' + res;
    }
  }

  calculate2() {
    this.result2 = "";
    if (this.validate(this.valueLocal)) {
      let res = this.decimalPipe.transform(this.unityValue * this.valueLocal, '1.2-2');
      this.result2 = 'R$ ' + res;
    }
  }

}
