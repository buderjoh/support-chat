import { Component } from '@angular/core';
import { WebSocketService } from '../../service/websocket-service'
import {NavController, List} from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'chat.html',
  providers: [WebSocketService]
})
export class ChatPage {

  messageForm: FormGroup;
  messages: String[] = [];

  constructor(public navCtrl: NavController, public webSocketService: WebSocketService, public formBuilder: FormBuilder) {
    this.messageForm = formBuilder.group({
      message: ['', Validators.required]
    });

    this.webSocketService.receiveMessage().subscribe(
      (messages => {
        console.log(messages);
        this.messages.push(messages.item.message);
      })
      );

  }

  public sendMessage() {
    this.webSocketService.sendMessage(this.messageForm.value);
  }


}
