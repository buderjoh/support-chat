import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat'
import { WebSocketService } from '../../service/websocket-service'
import io from 'socket.io-client';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {} from '@angular/forms'

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

 public login() {

   console.log(this.person.value);


   this.socket = io('http://localhost:8080');

   this.socket.emit('login', this.person.value);
   // this.socket.on('login', function(data){
   //   this.data = data;
   //   console.log(this.data);
   // }.bind(this));

   this.navCtrl.push(ChatPage);
}

}
