import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat'

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

 public login() {
  this.navCtrl.push(ChatPage);
}

}
