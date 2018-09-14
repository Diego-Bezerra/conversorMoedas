import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  unityValue: number = 0.0062;
  value: number;
  result: string;

  constructor(public navCtrl: NavController, private toast: Toast) {

  }

  validate(): boolean {
    return this.unityValue != null && this.value != null;
  }

  calculate() {
    this.result = "";
    if (this.validate()) {
      this.result = 'R$' + this.unityValue * this.value;
    } else {
      this.toast.show('Im a toast', '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        });
    }
  }
}
