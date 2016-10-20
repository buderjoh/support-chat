import { Component } from '@angular/core';
import { WebSocketService } from '../../service/websocket-service'
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'chat.html',
  providers: [WebSocketService]
})
export class ChatPage {

  messageForm: FormGroup;

  constructor(public navCtrl: NavController, public webSocketService: WebSocketService, public formBuilder: FormBuilder) {
    this.messageForm = formBuilder.group({
      message: ['', Validators.required]
    });

    this.webSocketService.receiveMessage().subscribe(
      (message => console.log(message))
      );

  }

  public sendMessage() {
    this.webSocketService.sendMessage(this.messageForm.value);
  }


}
