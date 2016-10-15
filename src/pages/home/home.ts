import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat'
import { WebSocketService } from '../../service/websocket-service'
import io from 'socket.io-client';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  templateUrl: 'home.html',
  providers: [WebSocketService]
})
export class HomePage {

  socket = null;
  loginForm: ControlGroup;

  constructor(public navCtrl: NavController, public webSocketService: WebSocketService, private formBuilder: FormBuilder, private nav: NavController,
              builder: FormBuilder) {
    this.loginForm = new ControlGroup({
      email: new Control("email", Validators.required),
      password: new Control("password", Validators.required)
    });

  logForm(){
    console.log(this.loginForm)
  }

 public login() {

   this.socket = io('http://localhost:8080');
   this.socket.on('news', function(data){
     this.data = data;
     console.log(this.data);
   }.bind(this));

   this.navCtrl.push(ChatPage);
}

}
