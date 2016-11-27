import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { UserPoolPage } from '../userpool/userpool';
import { WebSocketService } from '../../service/websocket-service';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'home.html',
  providers: [WebSocketService]
})
export class HomePage {

  socket = null;
  person: FormGroup;

  constructor(public navCtrl: NavController, public webSocketService: WebSocketService, private formBuilder: FormBuilder, private nav: NavController) {
    this.person = formBuilder.group({
      name: ['', Validators.required],
      problem: ['', Validators.required],
      email: ['', Validators.required],
      customerId: ['', Validators.required],
    });
  }

  public test() {
    this.navCtrl.push(UserPoolPage);
  }

 public login() {
   this.webSocketService.login(this.person);

   this.navCtrl.push(ChatPage);
}

}
